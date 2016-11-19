package pamm.endpoint.admin;

import pamm.domain.user.service.ActivateUserOperation;
import pamm.endpoint.ServiceResult;
import pamm.infrastructure.security.authentication.Principal;
import pamm.infrastructure.security.authentication.Token;
import pamm.infrastructure.security.authentication.UserAuthenticator;
import pamm.infrastructure.util.RequestUtil;
import play.Logger;
import play.db.jpa.Transactional;
import play.mvc.Controller;
import play.mvc.Result;

import javax.inject.Inject;

public class ActivateEndpoint extends Controller {
    private static final Logger.ALogger LOG = Logger.of(ActivateEndpoint.class);

    private final ActivateUserOperation activateUserOperation;
    private final RequestUtil requestUtil;
    private final UserAuthenticator authenticator;

    @Inject
    public ActivateEndpoint(ActivateUserOperation activateUserOperation,
                            UserAuthenticator authenticator,
                            RequestUtil requestUtil) {
        this.activateUserOperation = activateUserOperation;
        this.requestUtil = requestUtil;
        this.authenticator = authenticator;
    }

    @Transactional
    public Result activate(final String activateString) {
        final Principal principal = authenticator.validateToken(activateString);

        if (principal.getTokenStatus() == Token.Status.VALID
                && principal.getClaims().get("type").equals(Token.Type.ACTIVATE.toString())) {

            final ServiceResult serviceResult = activateUserOperation.execute(principal);
            if (serviceResult.getStatus().equals(ServiceResult.Status.OP_ERROR)) {
                return badRequest();
            }

            return redirect(requestUtil.getBaseUrl() + "/#/admin/activated");
        } else {
            return unauthorized();
        }
    }
}
