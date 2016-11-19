module.exports = function loginTest() {
    var RegistrationPage = require("./registration.page.js");
    var register = new RegistrationPage;
    var testData = require("./registration-testdata.json");
    var test = this;

    test.setDefaultTimeout(60000);

    test.Given(/^i am on the registration page$/, function (callback) {
       register.goToPage();
    });

    test.Given(/^i have entered valid registration information$/, function (callback) {
      register.fillFirstName(testData.firstName);
      register.fillLastName(testData.lastName);
      register.fillEmail(testData.email);
      register.fillConfirmEmail(testData.email);
      register.fillPassword(testData.password);
      register.fillConfirmPassword(testData.password);
    });

    test.Given(/^i have accepted the terms and conditions$/, function (callback) {
        register.clickTermsAndConditionsCheckBox();

    });

    test.When(/^i request account registration$/, function (callback) {
        register.register();
    });

    test.Then(/^i should receive a confirmation email$/, function (callback) {
        callback.pending();
    });

};
