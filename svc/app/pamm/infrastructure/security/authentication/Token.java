package pamm.infrastructure.security.authentication;

public interface Token {

    enum Status {VALID, INVALID, EXPIRED}

    enum Type {ACCESS, ACTIVATE, PASSWORD_RESET}
}
