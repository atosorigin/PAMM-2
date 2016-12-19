package pamm.endpoint.user;

import pamm.domain.user.service.RegisterUserOperation;
import pamm.endpoint.ResourceEndpoint;
import play.db.jpa.Transactional;
import play.mvc.Result;

import javax.inject.Inject;

public class RegisterEndpoint extends ResourceEndpoint {
    private final RegisterUserOperation registerUserOperation;

    @Inject
    public RegisterEndpoint(RegisterUserOperation registerUserOperation) {
        this.registerUserOperation = registerUserOperation;
    }

    @Transactional
    public Result register() {
        return response(registerUserOperation.execute(request().body().asJson()));
    }
}
