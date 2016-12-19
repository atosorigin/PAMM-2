package pamm.domain.audit.service;

import com.fasterxml.jackson.databind.JsonNode;
import pamm.endpoint.ServiceResult;
import pamm.domain.audit.model.AuditInfo;
import play.Logger;
import play.libs.Json;


public class AuditOperation {

    public enum LEVEL {UNRECOVERABLE, SEVERE, ERROR, WARNING, AUDIT, INFO, CONFIG}
    private static final Logger.ALogger LOG = Logger.of(AuditOperation.class);

    public ServiceResult execute(JsonNode jsonRequest, String email) {

        final AuditInfo auditInfo = Json.fromJson(jsonRequest, AuditInfo.class);
        final LEVEL level = auditInfo.getLevel();
        final String message = auditInfo.getMessage();
        final String logMessage = "[" +  level + "]" + "[" + email + "] " + message;

        if (level.equals(LEVEL.UNRECOVERABLE) || level.equals(LEVEL.SEVERE) || level.equals(LEVEL.ERROR))
        {
            LOG.error(logMessage);
        }

        return new ServiceResult(ServiceResult.Status.SUCCESS, "Error Logged");
    }
}
