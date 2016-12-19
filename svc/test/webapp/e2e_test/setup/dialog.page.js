"use strict";
module.exports = (function () {
    function DialogPage() {
        this.modalBackdrop = element.all(by.css(".modal-backdrop")).first();
        this.questionDialog = element(by.css(".bootstrap-dialog.type-info"));
        this.questionDialogBackButton = this.questionDialog.element(by.css(".btn-default"));
        this.errorDialog = element(by.css(".bootstrap-dialog.type-danger"));
        this.errorDialogOKButton = this.errorDialog.element(by.css(".btn-default"));
    }

    DialogPage.prototype.waitForDialogToClose = function () {
        return browser.wait(EC.stalenessOf(this.modalBackdrop), 5000);
    };

    DialogPage.prototype.dismissQuestionDialog = function () {
        this.questionDialogBackButton.click();
        return this.waitForDialogToClose();
    };

    DialogPage.prototype.dismissErrorDialog = function (waitForModelBackDrop) {
        this.errorDialogOKButton.click();
        return this.waitForDialogToClose();
    };

    DialogPage.prototype.getErrorDialog = function () {
        return this.errorDialog;
    };

    return DialogPage;
})();
