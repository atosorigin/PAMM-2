package util;

import play.Logger;
import play.Play;

import java.io.File;

public class ApplicationRootHelper {
    private final Logger.ALogger logger = Logger.of(this.getClass());

    public String getApplicationRootPath() {
        final File applicationRoot = Play.application().path();
        return applicationRoot.getAbsolutePath();
    }
}
