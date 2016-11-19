package pamm.infrastructure.module;

import com.google.inject.AbstractModule;
import pamm.infrastructure.security.cipher.BCryptCipher;
import pamm.infrastructure.security.cipher.Cipher;

public class AuthenticationModule extends AbstractModule {
    protected void configure() {

        bind(Cipher.class).to(BCryptCipher.class);
    }
}
