package pamm.dal.user;
import static pamm.infrastructure.security.authentication.Principal.Role;

import pamm.dal.EntityManagerProvider;
import pamm.dal.RepositoryObjectFactory;
import pamm.domain.user.model.User;
import play.Logger;

import javax.inject.Inject;
import javax.inject.Singleton;
import javax.persistence.NonUniqueResultException;
import javax.persistence.Query;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Singleton
public class UserRepository {
    private static final Logger.ALogger LOG = Logger.of(UserRepository.class);

    private final RepositoryObjectFactory repositoryObjectFactory;
    private final EntityManagerProvider emProvider;

    @Inject
    public UserRepository(RepositoryObjectFactory repositoryObjectFactory,
                          EntityManagerProvider emProvider) {
        this.repositoryObjectFactory = repositoryObjectFactory;
        this.emProvider = emProvider;
    }

    public User set(User user) {
        final UserEntity newUserEntity = repositoryObjectFactory.createEntity(user, UserEntity.class);
        emProvider.getEntityManager().persist(newUserEntity);

        final Integer id = (Integer) emProvider.getEntityManager().getEntityManagerFactory().getPersistenceUnitUtil().getIdentifier(newUserEntity);
        user.setId(id);

        return repositoryObjectFactory.createBusinessObject(newUserEntity, User.class);
    }

    public User get(Integer userId) {
        final UserEntity userEntity = emProvider.getEntityManager().find(UserEntity.class, userId);
        return repositoryObjectFactory.createBusinessObject(userEntity, User.class);
    }

    public List<User> getAll() {
        final List<UserEntity> userEntities = emProvider.getEntityManager().createNamedQuery(UserEntity.FIND_ALL).getResultList();
        final List<User> users = new ArrayList<>();

        userEntities.forEach(userEntity -> users.add(repositoryObjectFactory.createBusinessObject(userEntity, User.class)));

        return users;
    }

    public void update(User user) {
        final UserEntity userEntityToUpdate = emProvider.getEntityManager().find(UserEntity.class, user.getId());
        userEntityToUpdate.setEmail(user.getEmail());
        userEntityToUpdate.setForename(user.getForename());
        userEntityToUpdate.setPassword(user.getPassword());
        userEntityToUpdate.setSurname(user.getSurname());
        userEntityToUpdate.setJobTitle(user.getJobTitle());
        userEntityToUpdate.setBaseSite(user.getBaseSite());
        userEntityToUpdate.setPhone(user.getPhone());
        userEntityToUpdate.setRole(user.getRole());

        emProvider.getEntityManager().merge(userEntityToUpdate);
        emProvider.getEntityManager().flush();
        emProvider.getEntityManager().refresh(userEntityToUpdate);
    }

    public void remove(User user) {
        final UserEntity userToRemove = emProvider.getEntityManager().getReference(UserEntity.class, user.getId());
        emProvider.getEntityManager().remove(userToRemove);
    }

    public User findUserByEmail(String email, Role role) {
        final Query query = emProvider.getEntityManager().createNamedQuery(UserEntity.FIND_BY_EMAIL);
        query.setParameter(UserEntity.EMAIL_PARAM, email);
        query.setParameter(UserEntity.ROLE_PARAM, role.name().toUpperCase());
        final List<UserEntity> result = query.getResultList();

        if (result.size() > 1) {
            LOG.error("Duplicate user found for " + email + ".  Expected to be unique");
            throw new NonUniqueResultException();
        } else if (result.size() == 0) {
            LOG.debug("Cannot find user with " + email);
            return null;
        } else {
            return repositoryObjectFactory.createBusinessObject(result.get(0), User.class);
        }
    }

    public void activate(User user) {
        final UserEntity userEntity = emProvider.getEntityManager().find(UserEntity.class, user.getId());

        userEntity.setActivationDate(new Date());
        emProvider.getEntityManager().merge(userEntity);
    }
}

