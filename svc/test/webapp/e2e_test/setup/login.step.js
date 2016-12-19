"use strict";
module.exports = function loginTest() {
    var DBServiceCaller = require("./db-service-caller.js");
    var LoginPage = require("../feature/login/login.page.js");
    var db = new DBServiceCaller();
    var login = new LoginPage;
    var loginPath = __dirname + "/../feature/login/";
    var test = this;
    var testData = require("../feature/login/login.data.json");

    test.setDefaultTimeout(60000);

    test.Given("The user is registered",
        function (next) {
            db.query(loginPath + "check-test-user-exist.sql").then(function (result) {
                if (result === "SUCCESS") {
                    db.update(loginPath + "setup-test-user.sql").then(function () {
                        next();
                    }, function (e) {
                        console.error("\n[ERROR] Cannot setup test user because of " + e + "\n");
                    });
                } else {
                    db.update(loginPath + "create-test-user.sql").then(function () {
                        next();
                    }, function (e) {
                        console.error("\n[ERROR] Cannot setup test user because of " + e + "\n");
                    });
                }
            });
        });

    test.Given("I am on the login view at the start", function (next) {
        login.visitPage().then(function () {
            next();
        });
    });

    test.Given("I login with valid user", function (next) {
        login.fillInDetails(testData.userName, testData.password);
        login.login().then(function () {
            next();
        }, function () {
            expect("Login failed").to.equal("Login successful");
        });
    });

    test.Then("I see the home page", function (next) {
        expect(login.currentURL()).to.eventually.equal(browser.baseUrl + testData.homeURL).and.notify(next);
    });
};