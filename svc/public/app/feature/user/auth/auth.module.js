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
var auth_component_1 = require("./auth.component");
var auth_routing_1 = require("./auth.routing");
var login_component_1 = require("./login.component");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var register_component_1 = require("./register.component");
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    core_1.NgModule({
        imports: [
            auth_routing_1.AuthRouting,
            forms_1.ReactiveFormsModule,
            common_1.CommonModule
        ],
        declarations: [
            auth_component_1.AuthComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent
        ],
        bootstrap: [auth_component_1.AuthComponent]
    }),
    __metadata("design:paramtypes", [])
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map