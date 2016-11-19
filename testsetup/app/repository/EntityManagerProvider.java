package repository;

import play.Logger;
import play.db.jpa.JPA;

import javax.persistence.EntityManager;

public class EntityManagerProvider {
    private final Logger.ALogger logger = Logger.of(this.getClass());

    public EntityManager getEntityManager() {
        try {
            return JPA.em();
        } catch (Throwable t) {
            throw t;
        }
    }
}
