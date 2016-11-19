package controllers;

import com.fasterxml.jackson.databind.node.ArrayNode;
import play.Logger;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import repository.Dao;

import javax.inject.Inject;
import java.util.List;

public class SQLExecutionController extends Controller {
    private static final Logger.ALogger logger = Logger.of(SQLExecutionController.class);

    private Dao dao;

    @Inject
    public SQLExecutionController(Dao dao) {
        this.dao = dao;
    }

    @Transactional
    public Result update() {
        try {
            return ok(dao.executeUpdate(request().body().asText()));
        } catch (Exception e) {
            logger.info("Exception executing query - " + e);
            return internalServerError("ERROR");
        }
    }

    @Transactional
    public Result query() {
        try {
            return ok(dao.executeQuery(request().body().asText()));
        } catch (Exception e) {
            logger.info("Exception executing query - " + e);
            return internalServerError(e.getMessage());
        }
    }

    @Transactional
    public Result advancedQuery() {
        try {
            final List<List<String>> result = dao.executeAdvancedQuery(request().body().asText());
            final ArrayNode rows = Json.newArray();

            result.forEach(row -> {
                final ArrayNode rowNode = Json.newArray();
                row.forEach(field -> rowNode.add(field));
                rows.add(rowNode);
            });

            return ok(rows);
        } catch (Exception e) {
            logger.error("Exception executing query - " + e);
            return internalServerError(e.getMessage());
        }
    }
}
