package pamm.domain.user.service;

import com.fasterxml.jackson.databind.JsonNode;
import pamm.data.user.UserRepository;
import pamm.domain.user.model.User;
import pamm.endpoint.ServiceResult;
import pamm.infrastructure.mail.EmailService;
import pamm.infrastructure.security.authentication.Principal;
import pamm.infrastructure.security.authentication.Token;
import pamm.infrastructure.security.authentication.UserAuthenticator;
import pamm.infrastructure.util.RequestUtil;

import javax.inject.Inject;

public class RequestResetPasswordOperation {

    private final UserRepository repository;
    private final EmailService emailService;
    private final RequestUtil requestUtil;
    private final UserAuthenticator authenticator;

    @Inject
    public RequestResetPasswordOperation(final UserRepository repository,
                                         final UserAuthenticator authenticator,
                                         final EmailService emailService,
                                         final RequestUtil requestUtil) {
        this.repository = repository;
        this.emailService = emailService;
        this.requestUtil = requestUtil;
        this.authenticator = authenticator;
    }

    public ServiceResult execute(final JsonNode jsonRequest) {
        final String email = jsonRequest.findPath("email").textValue().toLowerCase();
        final Principal.Role role = Principal.Role.valueOf(jsonRequest.findPath("role").textValue().toUpperCase());
        final User user = repository.findUserByEmail(email, role);

        if (user == null) {
            return new ServiceResult(ServiceResult.Status.OP_ERROR, "Account Not Found");
        } else {
            final String token = authenticator.generateJwtTokenForUser(user, Token.Type.PASSWORD_RESET);

            // Using the first 8 characters of Token ID as verification as this is guaranteed to be random
            final String verificationCode = authenticator.parseToken(token).getId().substring(0, 8);

            if (role.equals(Principal.Role.USER)) {
                emailService.sendEmail(user.getEmail(), "Atos [Your Project] - Password Reset",
                    views.html.mailtemplates.userPasswordChange.render(user, requestUtil.getBaseUrl(), token,
                        verificationCode).toString());
            } else {
                emailService.sendEmail(user.getEmail(), "Atos [Your Project] - Password Reset",
                    views.html.mailtemplates.adminPasswordChange.render(user, requestUtil.getBaseUrl(), token,
                        verificationCode).toString());
            }

            return new ServiceResult(jsonRequest);
        }
    }
}
