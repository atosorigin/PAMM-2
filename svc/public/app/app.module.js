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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var user_module_1 = require("./feature/user/user.module");
var app_compponent_1 = require("./app.compponent");
var app_routing_1 = require("./app.routing");
var http_1 = require("@angular/http");
var user_context_1 = require("./service/data/context/user.context");
var data_access_service_1 = require("./service/data/data-access.service");
var datatype_service_1 = require("./service/datatype.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule,
                http_1.HttpModule,
                user_module_1.UserModule,
                app_routing_1.AppRouting
            ],
            declarations: [
                app_compponent_1.AppComponent,
            ],
            providers: [
                datatype_service_1.DataTypeService,
                data_access_service_1.DataAccessService,
                user_context_1.UserContext
            ],
            bootstrap: [app_compponent_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map