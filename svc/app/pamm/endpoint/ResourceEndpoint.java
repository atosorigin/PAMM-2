package pamm.endpoint;

import pamm.infrastructure.security.authentication.Principal;
import play.Logger;
import play.mvc.Controller;
import play.mvc.Result;

public abstract class ResourceEndpoint extends Controller {
    private static final Logger.ALogger LOG = Logger.of(ResourceEndpoint.class);

    /**
     * Helper method for returning the appropriate HTTP response base on the service result.
     *
     * @param serviceResult
     * @return http response
     */
    protected Result response(final ServiceResult serviceResult) {
        switch (serviceResult.getStatus()) {
            case SUCCESS: {
                return (serviceResult.getResult() == null) ? ok() : ok(serviceResult.getResult());
            }
            case UNAUTHORIZED: {
                return unauthorized();
            }
            case FORBIDDEN: {
                return forbidden();
            }
            case CONFLICT: {
                return (serviceResult.getResult() == null) ? status(CONFLICT) : status(CONFLICT, serviceResult.getResult());
            }
            case OP_ERROR: {
                return badRequest();
            }
            default: {
                return internalServerError();
            }
        }
    }

    protected Principal getUserPrincipal() {
        return (Principal) ctx().args.get(Principal.class.getName());
    }
}
