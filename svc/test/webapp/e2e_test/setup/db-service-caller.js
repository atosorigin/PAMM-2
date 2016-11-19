"use strict";

module.exports = (function () {
    var request = require("request");
    var fs = require("fs");
    var executeSql = function (script, pathUrl) {
        var deferred = protractor.promise.defer();

        fs.readFile(script, "utf-8", function (err, data) {
            request({
                url: pathUrl,
                method: "POST",
                headers: {
                    "Content-Type": "text/plain"
                },
                body: data
            }, function (error, response, body) {
                if (error || !data) {
                    console.error("\n[ERROR] DBServiceCaller:: Cannot read " + script + "\n");
                    deferred.reject(error);
                } else {
                    deferred.fulfill(body);
                }
            });
        });
        return deferred;
    };

    function DBServiceCaller() {
    }

    DBServiceCaller.prototype.update = function (script) {
        var pathUrl = "http://localhost:9001/update";
        return executeSql(script, pathUrl);
    };

    DBServiceCaller.prototype.query = function (script) {
        var pathUrl = "http://localhost:9001/query";
        return executeSql(script, pathUrl);
    };

    DBServiceCaller.prototype.advancedQuery = function (script) {
        var pathUrl = "http://localhost:9001/query/advanced";
        return executeSql(script, pathUrl);
    };

    return DBServiceCaller;
})();
