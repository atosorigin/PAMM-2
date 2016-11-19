package pamm.endpoint;

import com.google.inject.Inject;
import pamm.infrastructure.security.authentication.Principal;
import pamm.infrastructure.security.authentication.Token;
import pamm.infrastructure.security.authentication.UserAuthenticator;
import play.libs.F;
import play.mvc.Action;
import play.mvc.Http;
import play.mvc.Result;
import play.mvc.Results;

public class SecuredAction extends Action.Simple {
    @Inject
    private UserAuthenticator authenticator;

    private final Token.Type tokenType;
    private final Principal.Role role;

    public SecuredAction() {
        role = null;
        tokenType = Token.Type.ACCESS;
    }

    public SecuredAction(Principal.Role role) {
        this.role = role;
        tokenType = Token.Type.ACCESS;
    }

    public SecuredAction(Principal.Role role, Token.Type tokenType) {
        this.role = role;
        this.tokenType = tokenType;
    }

    public SecuredAction(Token.Type tokenType) {
        this.role = null;
        this.tokenType = tokenType;
    }

    public F.Promise<Result> call(final Http.Context ctx) throws Throwable {
        final String token = getTokenFromHeader(ctx);

        if (token == null) {
            return F.Promise.pure(Results.unauthorized("No Credentials"));
        }

        final Principal principal = authenticator.validateToken(token);

        if (principal.getTokenStatus() == Token.Status.INVALID) {
            return F.Promise.pure(Results.unauthorized("Invalid Credentials"));
        } else if (principal.getTokenStatus() == Token.Status.EXPIRED) {
            return F.Promise.pure(Results.unauthorized("Token Expired"));
        } else if (!principal.getType().equals(tokenType)) {
            return F.Promise.pure(Results.unauthorized("Invalid Credentials"));
        } else if (role != null && !principal.getRole().equals(role)) {
            return F.Promise.pure(Results.unauthorized("Invalid Credentials"));
        } else {
            ctx.args.put(Principal.class.getName(), principal);
            return delegate.call(ctx);
        }
    }

    private String getTokenFromHeader(final Http.Context ctx) {
        final String[] authTokenHeaderValues = ctx.request().headers().get(Http.HeaderNames.AUTHORIZATION);
        if ((authTokenHeaderValues != null) && (authTokenHeaderValues.length == 1) && (authTokenHeaderValues[0] != null)) {
            return authTokenHeaderValues[0].substring("Bearer ".length());
        } else {
            return null;
        }
    }
}
