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
var AuthComponent = (function () {
    function AuthComponent() {
    }
    AuthComponent = __decorate([
        core_1.Component({
            template: "\n        <div id=\"user-auth\" data-ng-cloak>\n          <header class=\"container-fluid\">\n              <h1>PAMM-2 </h1>\n          </header>\n          <router-outlet></router-outlet>\n          <footer>\n            <div><i class=\"fa fa-copyright\"></i>2016 Atos EPI- Powered by PAMM2</div>\n          </footer>\n        </div>",
            styleUrls: ["app/feature/user/auth/auth.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=auth.component.js.map