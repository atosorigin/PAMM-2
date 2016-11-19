package pamm.endpoint.admin;

import pamm.endpoint.ResourceEndpoint;
import pamm.endpoint.SecuredAction;
import pamm.infrastructure.security.authentication.Principal;
import play.mvc.With;

@With(AdminSecuredEndpoint.AdminSecuredAction.class)
public abstract class AdminSecuredEndpoint extends ResourceEndpoint {

    static class AdminSecuredAction extends SecuredAction {
        public AdminSecuredAction() {
            super(Principal.Role.ADMIN);
        }
    }
}
