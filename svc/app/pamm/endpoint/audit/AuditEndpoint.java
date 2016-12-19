package pamm.endpoint.audit;

import pamm.domain.audit.service.AuditOperation;
import pamm.endpoint.ResourceEndpoint;
import pamm.endpoint.SecuredAction;
import play.Logger;
import play.db.jpa.Transactional;
import play.mvc.Result;
import play.mvc.With;

import javax.inject.Inject;

@With(SecuredAction.class)
public class AuditEndpoint extends ResourceEndpoint {

    private static final Logger.ALogger LOG = Logger.of(AuditEndpoint.class);
    private final AuditOperation auditOperation;

    @Inject
    public AuditEndpoint(final AuditOperation auditService) {
        this.auditOperation = auditService;
    }

    @Transactional
    public Result log() {
        final String email = (String) getUserPrincipal().getClaims().get("email");
        return response(auditOperation.execute(request().body().asJson(), email));
    }
}
