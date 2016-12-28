"use strict";

module.exports = (function () {
    function LoginPage() {
        this.usernameField = element(by.model("login.credentials.email"));
        this.passwordField = element(by.model("login.credentials.password"));
        this.loginButton = element(by.css('[type="submit"]'));

        this.usernameRequiredError = element(by.css('[data-ng-messages="loginForm.email.$error"]'));
        this.passwordRequiredError = element(by.css('[data-ng-messages="loginForm.password.$error"]'));

        this.invalidLoginError = element(by.css('[data-ng-show="login.hasAuthenticationError"]'));
    }

    LoginPage.prototype.visitPage = function () {
        return browser.get("/");
    };

    LoginPage.prototype.fillInDetails = function (username, password) {
        this.usernameField.clear();
        this.passwordField.clear();

        return this.usernameField.sendKeys(username) && this.passwordField.sendKeys(password);
    };

    LoginPage.prototype.login = function () {
        return this.loginButton.click();
    };

    LoginPage.prototype.currentURL = function (){
        return browser.getCurrentUrl();
    };

    return LoginPage;
})();
