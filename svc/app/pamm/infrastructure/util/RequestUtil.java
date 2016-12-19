package pamm.infrastructure.util;

import play.mvc.Http;
import javax.inject.Singleton;

@Singleton
public class RequestUtil {
    public String getBaseUrl() {
        if (Http.Context.current().request().secure()) {
            return "https://" + Http.Context.current().request().host();
        } else {
            return "http://" + Http.Context.current().request().host();
        }
    }
}
