package pamm.endpoint.auth;

import pamm.domain.user.service.RequestResetPasswordOperation;
import pamm.endpoint.ResourceEndpoint;
import pamm.endpoint.user.UserSecuredEndpoint;
import play.Logger;
import play.db.jpa.Transactional;
import play.mvc.Result;

import javax.inject.Inject;

public class RequestResetPasswordEndpoint extends ResourceEndpoint {
    private static final Logger.ALogger LOG = Logger.of(UserSecuredEndpoint.class);
    private final RequestResetPasswordOperation requestResetPasswordOperation;

    @Inject
    public RequestResetPasswordEndpoint(RequestResetPasswordOperation requestResetPasswordOperation) {
        this.requestResetPasswordOperation = requestResetPasswordOperation;
    }

    @Transactional
    public Result requestReset() {
        return response(requestResetPasswordOperation.execute(request().body().asJson()));
    }
}
