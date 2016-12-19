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
var user_component_1 = require("./user.component");
var user_routing_1 = require("./user.routing");
var auth_module_1 = require("./auth/auth.module");
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    core_1.NgModule({
        imports: [
            user_routing_1.UserRouting,
            auth_module_1.AuthModule
        ],
        declarations: [
            user_component_1.UserComponent
        ],
        bootstrap: [user_component_1.UserComponent]
    }),
    __metadata("design:paramtypes", [])
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map