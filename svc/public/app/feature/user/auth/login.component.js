"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var user_context_1 = require("../../../service/data/context/user.context");
var datatype_service_1 = require("../../../service/datatype.service");
var role_1 = require("../../../service/data/context/role");
var LoginComponent = (function () {
    function LoginComponent(userContext, dataType) {
        this.userContext = userContext;
        this.dataType = dataType;
        this.submitted = false;
        this.hasAuthenticationError = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new forms_1.FormGroup({
            "username": new forms_1.FormControl("", forms_1.Validators.compose([
                forms_1.Validators.required,
                this.dataType.email,
            ])),
            "password": new forms_1.FormControl("", forms_1.Validators.required)
        });
    };
    LoginComponent.prototype.login = function () {
        this.submitted = true;
        this.userContext.login(this.loginForm.controls["username"].value, this.loginForm.controls["password"].value, role_1.Role.USER)
            .subscribe(function (user) {
            console.log("++++++++++++++++++do navigate");
        }, function (error) {
            console.log("+++++++++++++");
            console.log(error);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "login.html",
        styleUrls: ["auth-child.css"]
    }),
    __metadata("design:paramtypes", [user_context_1.UserContext,
        datatype_service_1.DataTypeService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map