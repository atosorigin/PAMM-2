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
var router_1 = require("@angular/router");
var auth_component_1 = require("./auth.component");
var login_component_1 = require("./login.component");
var register_component_1 = require("./register.component");
var routes = [
    {
        path: "user/auth", component: auth_component_1.AuthComponent,
        children: [
            { path: "login", component: login_component_1.LoginComponent },
            { path: "register", component: register_component_1.RegisterComponent }
        ]
    }
];
var AuthRouting = (function () {
    function AuthRouting() {
    }
    AuthRouting = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(routes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AuthRouting);
    return AuthRouting;
}());
exports.AuthRouting = AuthRouting;
//# sourceMappingURL=auth.routing.js.map