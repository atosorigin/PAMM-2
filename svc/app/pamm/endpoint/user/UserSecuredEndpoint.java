package pamm.endpoint.user;

import pamm.endpoint.ResourceEndpoint;
import pamm.endpoint.SecuredAction;
import pamm.infrastructure.security.authentication.Principal;
import play.mvc.With;

@With(UserSecuredEndpoint.UserSecuredAction.class)
public abstract class UserSecuredEndpoint extends ResourceEndpoint {

    static class UserSecuredAction extends SecuredAction {
        public UserSecuredAction() {
            super(Principal.Role.USER);
        }
    }
}
