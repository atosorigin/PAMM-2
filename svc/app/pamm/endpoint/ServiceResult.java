package pamm.endpoint;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import play.libs.Json;

import java.io.File;

/**
 * This class holds the result and status of an Operation.  It is up to the endpoints to send back the appropriate protocol response.
 * This separation enables swapping to different protocol endpoints if required or moving to a different server
 * such as Tomcat.
 */
public class ServiceResult {

    public enum Status {SUCCESS, UNAUTHORIZED, OP_ERROR, SYS_ERROR, NOT_IMPLEMENTED, FORBIDDEN}

    private final Status status;
    private JsonNode result;
    private Object rawResult;
    private File fileResult;

    public ServiceResult(final JsonNode result) {
        this.result = result;
        this.status = Status.SUCCESS;
    }

    public ServiceResult(final File fileResult) {
        this.fileResult = fileResult;
        this.status = Status.SUCCESS;
    }

    public ServiceResult(final String message) {
        final ObjectNode messageNode = Json.newObject();
        messageNode.put("message", message);

        this.result = messageNode;
        this.status = Status.SUCCESS;
    }

    public ServiceResult(final Status status, final JsonNode result) {
        this.result = result;
        this.status = status;
    }

    public ServiceResult(final Status status, final String message) {
        final ObjectNode messageNode = Json.newObject();
        messageNode.put("message", message);
        result = messageNode;

        this.status = status;
    }

    public ServiceResult(final Status status) {
        this.result = null;
        this.status = status;
    }

    public Status getStatus() {
        return status;
    }

    public JsonNode getResult() {
        return result;
    }

    public Object getRawResult() {
        return rawResult;
    }

    public File getFileResult() {
        return fileResult;
    }

    public void setRawResult(Object rawResult) {
        this.rawResult = rawResult;
    }
}
