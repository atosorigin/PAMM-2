package util;

import play.Logger;
import play.Play;

import java.io.*;

public class FileReaderUtility {

    private final Logger.ALogger logger = Logger.of(this.getClass());
    public String readFile(String fileName) throws IOException {
        InputStream inputStream = Play.application().resourceAsStream(fileName);
        try (
                final BufferedReader br = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"))
        ) {
            final StringBuilder sb = new StringBuilder();
            for (String line = br.readLine(); line != null; line = br.readLine()) {
                sb.append(line);
                sb.append("\n");
            }
            return sb.toString();
        }
    }
}
