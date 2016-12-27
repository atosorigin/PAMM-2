package pamm.domain.user.service;

import com.fasterxml.jackson.databind.JsonNode;
import pamm.data.user.UserRepository;
import pamm.endpoint.ServiceResult;
import pamm.domain.user.model.User;
import play.Logger;

import javax.inject.Inject;

public class UpdateUserOperation {
    private static final Logger.ALogger LOG = Logger.of(UpdateUserOperation.class);
    private final UserRepository repository;

    @Inject
    public UpdateUserOperation(final UserRepository repository) {
        this.repository = repository;
    }

    public ServiceResult execute(final JsonNode jsonRequest) {
        final Integer id = new Integer(jsonRequest.findPath("id").textValue());
        final User user = repository.get(id);

        user.setForename(jsonRequest.findPath("forename").textValue());
        user.setSurname(jsonRequest.findPath("surname").textValue());
        user.setEmail(jsonRequest.findPath("email").textValue());
        user.setPassword(jsonRequest.findPath("password").textValue());

        // TODO any other fields?

        repository.update(user);
        return new ServiceResult(jsonRequest);
    }
}
