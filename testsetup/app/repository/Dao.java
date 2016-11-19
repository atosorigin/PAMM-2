package repository;

import play.Logger;

import javax.inject.Inject;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Dao {
    public static final String SUCCESS = "SUCCESS";
    public static final String ERROR = "ERROR";

    private static final Logger.ALogger LOG = Logger.of(Dao.class);
    private final EntityManagerProvider emp;

    @Inject
    public Dao(EntityManagerProvider emp) {
        this.emp = emp;
    }

    public final String executeUpdate(final String script) {
        try {
            final String sql = script.replaceAll("(\\r|\\n)", " ");
            Arrays.stream(sql.split(";"))
                .forEach(statement -> emp.getEntityManager().createNativeQuery(statement + ";").executeUpdate());

            return SUCCESS;
        } catch (Exception e) {
            LOG.error("Error executing update SQL: " + script, e);
            return ERROR;
        }
    }

    public final String executeQuery(final String script) {
        try {
            final String sql = script.replaceAll("(\\r|\\n)", " ");
            emp.getEntityManager().createNativeQuery(sql).getSingleResult();
            return SUCCESS;
        } catch (Exception e) {
            LOG.error("Error executing query SQL: \n\n" + script, e);
            return ERROR;
        }
    }

    public final List<List<String>> executeAdvancedQuery(final String script) {
        try {
            final String sql = script.replaceAll("(\\r|\\n)", " ");
            final List<Object[]> queryResult = emp.getEntityManager().createNativeQuery(sql).getResultList();

            final List<List<String>> result = new ArrayList<>();
            for (Object row : queryResult) {
                final List<String> rowResult = new ArrayList<>();
                if (row.getClass().isArray()) {
                    for (Object field : (Object[]) row) {
                        rowResult.add(field != null ? field.toString() : "");
                    }
                } else {
                    rowResult.add(row.toString());
                }
                result.add(rowResult);
            }
            return result;
        } catch (Exception e) {
            LOG.error("Error executing query SQL: \n\n" + script, e);
            throw e;
        }
    }
}

