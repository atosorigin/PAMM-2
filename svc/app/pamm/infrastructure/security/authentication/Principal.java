package pamm.infrastructure.security.authentication;

import io.jsonwebtoken.Claims;

public class Principal {
    public enum Role {USER, ADMIN};

    public interface ClaimProperties {
        String ROLE = "role";
        String TYPE = "type";
        String ID = "id";
        String FORENAME = "forename";
        String SURNAME = "surname";
        String EMAIL = "email";
        String PHONE ="phone";
    }

    private final String authToken;
    private final Claims claims;
    private final Token.Status tokenStatus;
    private final String subject;

    public Role getRole() {
        return Role.valueOf(claims.get(ClaimProperties.ROLE).toString());
    }

    public Integer getId() {
        return new Integer(claims.get(ClaimProperties.ID).toString());
    }

    public String getForename() {
        return claims.get(ClaimProperties.FORENAME).toString();
    }

    public String getSurname() {
        return claims.get(ClaimProperties.SURNAME).toString();
    }

    public String getEmail() {
        return claims.get(ClaimProperties.EMAIL).toString();
    }

    public String getPhone() {
        return claims.get(ClaimProperties.PHONE).toString();
    }

    public Token.Type getType() {
        return Token.Type.valueOf(claims.get(ClaimProperties.TYPE).toString());
    }

    public Principal(String authToken, Token.Status tokenStatus, Claims claims) {
        this.authToken = authToken;
        this.tokenStatus = tokenStatus;
        this.claims = claims;
        this.subject = claims.getSubject();
    }

    public Principal(String authToken, Token.Status tokenStatus) {
        this.authToken = authToken;
        this.tokenStatus = tokenStatus;
        this.claims = null;
        this.subject = null;
    }

    public String getAuthToken() {
        return authToken;
    }

    public Claims getClaims() {
        return claims;
    }

    public Token.Status getTokenStatus() {
        return tokenStatus;
    }

    public String getSubject() {
        return subject;
    }
}

