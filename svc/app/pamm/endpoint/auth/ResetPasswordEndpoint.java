package pamm.endpoint.auth;

import pamm.domain.user.service.ResetPasswordOperation;
import pamm.endpoint.ResourceEndpoint;
import pamm.endpoint.SecuredAction;
import pamm.infrastructure.security.authentication.Principal;
import pamm.infrastructure.security.authentication.Token;
import play.Logger;
import play.db.jpa.Transactional;
import play.mvc.Result;
import play.mvc.With;

import javax.inject.Inject;

@With(ResetPasswordEndpoint.SecurePasswordResetAction.class)
public class ResetPasswordEndpoint extends ResourceEndpoint {

    static class SecurePasswordResetAction extends SecuredAction {
        SecurePasswordResetAction() {
            super(Token.Type.PASSWORD_RESET);
        }
    }

    private static final Logger.ALogger LOG = Logger.of(ResetPasswordEndpoint.class);
    private final ResetPasswordOperation resetPasswordOperation;

    @Inject
    public ResetPasswordEndpoint(final ResetPasswordOperation resetPasswordOperation) {
        this.resetPasswordOperation = resetPasswordOperation;
    }

    @Transactional
    public Result reset() {
        final Principal principal = getUserPrincipal();
        final String userVerificationCode = request().body().asJson().findPath("verification").asText();
        final String newPassword = request().body().asJson().findPath("password").asText();

        return response(resetPasswordOperation.execute(principal, userVerificationCode, newPassword));
    }
}
