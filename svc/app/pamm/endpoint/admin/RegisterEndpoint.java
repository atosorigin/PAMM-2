package pamm.endpoint.admin;

import pamm.domain.user.service.RegisterAdminOperation;
import pamm.endpoint.ResourceEndpoint;
import play.db.jpa.Transactional;
import play.mvc.Result;

import javax.inject.Inject;

public class RegisterEndpoint extends ResourceEndpoint {
    private final RegisterAdminOperation registerAdminOperation;

    @Inject
    public RegisterEndpoint(final RegisterAdminOperation registerAdminOperation) {
        this.registerAdminOperation = registerAdminOperation;
    }

    @Transactional
    public Result register() {
        return response(registerAdminOperation.execute(request().body().asJson()));
    }
}
