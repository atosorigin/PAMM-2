package pamm.domain.user.service;

import com.fasterxml.jackson.databind.JsonNode;
import pamm.dal.user.UserRepository;
import pamm.dal.user.WhiteListRepository;
import pamm.domain.user.model.User;
import pamm.endpoint.ServiceResult;
import pamm.infrastructure.mail.EmailService;
import pamm.infrastructure.security.authentication.Token;
import pamm.infrastructure.security.authentication.UserAuthenticator;
import pamm.infrastructure.security.cipher.BCryptCipher;
import pamm.infrastructure.util.RequestUtil;
import play.Logger;
import play.libs.Json;

import javax.inject.Inject;

import static pamm.infrastructure.security.authentication.Principal.Role;

public class RegisterUserOperation {
    private static final Logger.ALogger LOG = Logger.of(RegisterUserOperation.class);

    private final UserRepository repository;
    private final BCryptCipher cipher;
    private final EmailService emailService;
    private final RequestUtil requestUtil;
    private final UserAuthenticator authenticator;
    private final WhiteListRepository whiteListRepository;

    @Inject
    public RegisterUserOperation(UserRepository repository,
                                 BCryptCipher cipher,
                                 UserAuthenticator authenticator,
                                 EmailService emailService,
                                 RequestUtil requestUtil,
                                 WhiteListRepository whiteListRepository) {
        this.repository = repository;
        this.cipher = cipher;
        this.emailService = emailService;
        this.requestUtil = requestUtil;
        this.authenticator = authenticator;
        this.whiteListRepository = whiteListRepository;
    }

    public ServiceResult execute(JsonNode jsonRequest) {
        final String userEmail = jsonRequest.findPath("email").textValue();

        if (jsonRequest.findPath("activationDate").textValue() != null) {
            LOG.info("Attempted activation with Registration: " + userEmail);
            return new ServiceResult(ServiceResult.Status.FORBIDDEN);
        }

        if (!whiteListRepository.emailWhiteListed(userEmail, Role.USER)) {
            return new ServiceResult(ServiceResult.Status.FORBIDDEN, "You're not authorised to use this application");
        }

        final User existingUser = repository.findUserByEmail(userEmail, Role.USER);
        if (existingUser != null) {
            LOG.info("Registration attempted with existing: " + userEmail);
            return new ServiceResult(ServiceResult.Status.OP_ERROR, "Account Exists");
        }

        final User user = Json.fromJson(jsonRequest, User.class);
        user.setRole(Role.USER);
        user.setPassword(cipher.hash(jsonRequest.findPath("password").textValue()));
        repository.set(user);

        final String token = authenticator.generateJwtTokenForUser(user, Token.Type.ACTIVATE);
        emailService.sendEmail(user.getEmail(), "Welcome to Atos Learn Anywhere Admin Portal. Please activate your account",
                views.html.mailtemplates.userActivation.render(user, requestUtil.getBaseUrl(), token).toString());

        return new ServiceResult(jsonRequest);
    }
}
