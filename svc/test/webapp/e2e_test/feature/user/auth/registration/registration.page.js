"use strict";

// "Register" Page Object containing functions to perform actions on the Register page.

// Node.js 'export', which exposes this Page Object module (a psuedo-class) as a constructor, for use by the tests.
module.exports = (function () {
    function RegisterPage() {
        this.firstNameField = element(by.model("r.details.forename"));
        this.lastNameField = element(by.model("r.details.surname"));
        this.telephoneField = element(by.model("r.details.phone"));
        this.emailField = element(by.model("r.details.email"));
        this.confirmEmailField = element(by.model("r.confirm.email"));
        this.passwordField = element(by.model("r.details.password"));
        this.confirmPasswordField = element(by.model("r.confirm.password"));
        this.termsAndConditionsCheckbox = element(by.model("register.termsofuse"));
        this.termsAndConditionsLink = element(by.linkText("Terms of Use"));
        this.registerButton = element(by.buttonText("REGISTER"));

        this.bootstrapDialog = $(".modal-dialog");
        this.bootstrapDialogHeader = $(".bootstrap-dialog-title");
        this.bootstrapDialogMessage = $(".bootstrap-dialog-message");
        this.bootstrapDialogOKButton = element(by.buttonText("OK"));
        this.bootstrapDialogGoToLoginButton = element(by.buttonText("Go to login"));
   }

    RegisterPage.prototype.goToPage = function () {
        browser.get("/#/user/register");
    };

    RegisterPage.prototype.fillFirstName = function (firstName) {
        this.firstNameField.clear().sendKeys(firstName);
    };

    RegisterPage.prototype.fillLastName = function (lastName) {
        this.lastNameField.clear().sendKeys(lastName);
    };

    RegisterPage.prototype.fillTelephone = function (telephone) {
        this.telephoneField.clear().sendKeys(telephone);
    };

    RegisterPage.prototype.fillEmail = function (email) {
        this.emailField.clear().sendKeys(email);
    };

    RegisterPage.prototype.fillConfirmEmail = function (confirmEmail) {
        this.confirmEmailField.clear().sendKeys(confirmEmail);
    };

    RegisterPage.prototype.fillPassword = function (password) {
        this.passwordField.clear().sendKeys(password);
    };

    RegisterPage.prototype.fillConfirmPassword = function (confirmPassword) {
        this.confirmPasswordField.clear().sendKeys(confirmPassword);
    };

    RegisterPage.prototype.clickTermsAndConditionsCheckBox = function () {
        this.termsAndConditionsCheckbox.click();
    };

    RegisterPage.prototype.clickTermsAndConditionsLink = function () {
        this.termsAndConditionsLink.click();
    };

    RegisterPage.prototype.register = function () {
        this.registerButton.click();
    };

    RegisterPage.prototype.isModalDialogDisplayed = function () {
        var EC = protractor.ExpectedConditions;
        return browser.wait(EC.visibilityOf(this.bootstrapDialog), 5000);
    };

    RegisterPage.prototype.getModalDialogHeaderText = function () {
        return this.bootstrapDialogHeader.getText();
    };

    RegisterPage.prototype.getModalDialogMessageText = function () {
        return this.bootstrapDialogMessage.getText();
    };

    RegisterPage.prototype.modalDialogOkButtonClick = function () {
        return this.bootstrapDialogOKButton.click();
    };

    RegisterPage.prototype.modalDialogGoToLoginButtonClick = function () {
        return this.bootstrapDialogGoToLoginButton.click();
    };

    return RegisterPage;
})();