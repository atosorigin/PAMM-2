package pamm.domain.user.service;

import com.fasterxml.jackson.databind.node.ObjectNode;
import io.jsonwebtoken.Claims;
import pamm.endpoint.ServiceResult;
import pamm.infrastructure.security.authentication.Principal;
import pamm.infrastructure.security.authentication.UserAuthenticator;
import play.Logger;
import play.libs.Json;

import javax.inject.Inject;

import static pamm.infrastructure.security.authentication.Principal.Role;

public class AuthenticateOperation {
    private static final Logger.ALogger LOG = Logger.of(AuthenticateOperation.class);

    private final UserAuthenticator authenticator;

    @Inject
    public AuthenticateOperation(final UserAuthenticator authenticator) {
        this.authenticator = authenticator;
    }

    public ServiceResult execute(final String username,
                                 final String password,
                                 final Role role) {
        final Principal userPrincipal = authenticator.authenticate(username, password, role);

        if (userPrincipal == null) {
            return new ServiceResult(ServiceResult.Status.OP_ERROR);
        } else {
            final Claims claims = userPrincipal.getClaims();
            final ObjectNode dataNode = Json.newObject();
            final ObjectNode userNode = Json.newObject();

            dataNode.put("authToken", userPrincipal.getAuthToken());
            dataNode.put("subject", userPrincipal.getSubject());

            userNode.put("id", (String) claims.get("id"));
            userNode.put("email", (String) claims.get("email"));
            userNode.put("forename", (String) claims.get("forename"));
            userNode.put("surname", (String) claims.get("surname"));
            userNode.put("phone", (String) claims.get("phone"));

            dataNode.set("user", userNode);
            return new ServiceResult(dataNode);
        }
    }
}