package pamm.infrastructure.util;

import javax.inject.Singleton;
import java.math.BigInteger;
import java.security.SecureRandom;

@Singleton
public class RandomKeyGenerator {
    private SecureRandom random = new SecureRandom();

    public String generate() {
        return new BigInteger(130, random).toString(32);
    }
}
