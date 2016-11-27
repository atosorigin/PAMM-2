config = {
    seleniumAddress: "http://localhost:4444/wd/hub",

    capabilities: {
        browserName: "chrome"
    },

    cucumberOpts : {
        format: "pretty",
        require: []
    },

    // CHANGE this to test server
    baseUrl: "http://localhost:9000",

    params: {
        profile: "local",
        testMode: "single",
        reportPath: __dirname + "/../../../report/e2e/"
    },

    specs: [],

    onPrepare: function () {
        browser.driver.manage().window().setPosition(3841, 100);
        browser.driver.manage().window().setSize(1280, 800);
        global.EC = protractor.ExpectedConditions;
        global.DBServiceCaller = require("./db-service-caller.js");
        global.DialogPage = require("./dialog.page.js");
        global.NavigationPage = require("./navigation.page.js");

        chai = require("chai");
        chaiAsPromised = require("chai-as-promised");
        chai.use(chaiAsPromised);

        expect = chai.expect;
        assert = chai.assert;
        should = chai.should;
    },

    // set to "custom" instead of cucumber.
    framework: "custom",

    // path relative to the current config file
    frameworkPath: __dirname + "/../../../../../node_modules/protractor-cucumber-framework"
};
