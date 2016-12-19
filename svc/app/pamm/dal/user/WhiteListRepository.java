package pamm.dal.user;

import pamm.dal.EntityManagerProvider;
import pamm.infrastructure.security.authentication.Principal;
import play.Logger;

import javax.inject.Inject;
import javax.inject.Singleton;
import javax.persistence.Query;
import java.util.List;

@Singleton
public class WhiteListRepository {

    private static final Logger.ALogger LOG = Logger.of(WhiteListRepository.class);
    private final EntityManagerProvider entityManagerProvider;

    @Inject
    public WhiteListRepository(EntityManagerProvider emp) {
        this.entityManagerProvider = emp;
    }

    public boolean emailWhiteListed(String email, Principal.Role role) {
        final Query query = entityManagerProvider.getEntityManager().createNamedQuery(WhiteListEntity.FIND_BY_EMAIL);
        query.setParameter(WhiteListEntity.EMAIL_PARAM, email.toLowerCase());
        query.setParameter(WhiteListEntity.ROLE_PARAM, role.name().toUpperCase());

        final List<WhiteListEntity> result = query.getResultList();

        return result.size() > 0;
    }
}
