package pamm.endpoint.admin;

import com.fasterxml.jackson.databind.JsonNode;
import pamm.domain.user.service.AuthenticateOperation;
import play.Logger;
import play.db.jpa.Transactional;
import play.mvc.Controller;
import play.mvc.Result;

import javax.inject.Inject;
import javax.persistence.NonUniqueResultException;
import java.io.UnsupportedEncodingException;
import java.util.Base64;
import java.util.Optional;

import static pamm.infrastructure.security.authentication.Principal.Role;

public class LoginEndpoint extends Controller {
    private static final Logger.ALogger LOG = Logger.of(LoginEndpoint.class);

    public static final String BASIC = "Basic ";

    private final AuthenticateOperation authenticateOperation;

    @Inject
    public LoginEndpoint(final AuthenticateOperation authenticateOperation) {
        this.authenticateOperation = authenticateOperation;
    }

    @Transactional
    public Result login() {
        final Optional<String> authHeader = Optional.ofNullable(request().getHeader(AUTHORIZATION));
        if (!authHeader.isPresent()) {
            return unauthorized();
        }

        if (!authHeader.get().startsWith(BASIC)) {
            return badRequest("Incorrect Auth Scheme");
        }

        try {
            final String encodedAuthValue = authHeader.get().substring("Basic ".length());
            final byte[] decoded = Base64.getDecoder().decode(encodedAuthValue);
            final String[] authValue = new String(decoded, "UTF-8").split(":");

            if (authValue.length != 2) {
                return unauthorized("Incorrect ICredentials");
            }
            final String username = authValue[0];
            final String password = authValue[1];

            try {
                final JsonNode userPrincipal = authenticateOperation.execute(username, password,
                    Role.ADMIN).getResult();

                if (userPrincipal == null) {
                    return unauthorized("Incorrect ICredentials");
                }

                return ok(userPrincipal);
            } catch (IllegalArgumentException e) {
                return badRequest(e.getMessage());
            } catch (NonUniqueResultException e) {
                LOG.error("LoginController failed because email duplication is found for " + username);
                return internalServerError();
            }
        } catch (UnsupportedEncodingException e) {
            return badRequest("Malformed ICredentials");
        }
    }
}
