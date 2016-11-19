package pamm.domain.user.service;

import pamm.dal.user.UserRepository;
import pamm.domain.user.model.User;
import pamm.endpoint.ServiceResult;
import pamm.infrastructure.security.authentication.Principal;
import pamm.infrastructure.security.cipher.BCryptCipher;

import javax.inject.Inject;

public class ResetPasswordOperation {

    private final UserRepository repository;
    private final BCryptCipher cipher;

    @Inject
    public ResetPasswordOperation(UserRepository repository,
                                  BCryptCipher cipher) {
        this.repository = repository;
        this.cipher = cipher;
    }

    public ServiceResult execute(Principal principal, String userVerificationCode, String newPassword) {
        final String verificationCode = principal.getClaims().getId().substring(0, 8);

        if (!userVerificationCode.equals(verificationCode)) {

            System.out.println("Got here!" + verificationCode);
            return new ServiceResult(ServiceResult.Status.UNAUTHORIZED);
        }

        final Integer userId = new Integer(principal.getSubject());
        final User user = repository.get(userId);
        user.setPassword(cipher.hash(newPassword));
        repository.update(user);
        return new ServiceResult(ServiceResult.Status.SUCCESS);

    }
}
