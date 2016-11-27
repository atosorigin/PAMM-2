package pamm.domain.user.service;

import pamm.dal.user.UserRepository;
import pamm.endpoint.ServiceResult;
import pamm.domain.user.model.User;
import pamm.infrastructure.security.authentication.Principal;

import javax.inject.Inject;

public class ActivateUserOperation {
    private final UserRepository userRepository;

    @Inject
    public ActivateUserOperation(final UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public ServiceResult execute(final Principal principal) {
        final Integer userId = new Integer(principal.getSubject());
        final User user = userRepository.get(userId);

        if (user == null) {
            return new ServiceResult(ServiceResult.Status.OP_ERROR, "User not found");
        } else if (user.getActivationDate() != null) {
            return new ServiceResult("User is already activated");
        } else {
            userRepository.activate(user);
            return (new ServiceResult(ServiceResult.Status.SUCCESS));
        }
    }
}
