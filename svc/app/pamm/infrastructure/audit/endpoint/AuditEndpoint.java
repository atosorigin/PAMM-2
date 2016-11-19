package pamm.infrastructure.audit.endpoint;

    import com.google.inject.Inject;
    import pamm.endpoint.ResourceEndpoint;
    import pamm.endpoint.SecuredAction;
    import pamm.infrastructure.audit.service.AuditOperation;
    import play.Logger;
    import play.db.jpa.Transactional;
    import play.mvc.Result;
    import play.mvc.With;

@With(SecuredAction.class)
public class AuditEndpoint extends ResourceEndpoint {

    private static final Logger.ALogger LOG = Logger.of(AuditEndpoint.class);
    private final AuditOperation auditOperation;

    @Inject
    public AuditEndpoint(AuditOperation auditService) {
        this.auditOperation = auditService;
    }

    @Transactional
    public Result log() {
        final String email = (String)getUserPrincipal().getClaims().get("email");
        return response(auditOperation.execute(request().body().asJson(), email));
    }
}
