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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var role_1 = require("./role");
var user_1 = require("./user");
var UserContext = (function () {
    function UserContext(http) {
        this.http = http;
        this._user = null;
    }
    UserContext.prototype.login = function (username, password, role) {
        this.logout();
        var loginUrl;
        if (role === role_1.Role.ADMIN) {
            loginUrl = "login/admin";
        }
        else if (role === role_1.Role.USER) {
            loginUrl = "login/user";
        }
        return this.http.post(loginUrl, {}, {
            headers: new http_1.Headers({
                "Authorization": "Basic " + btoa(username + ":" + password),
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json;charset=UTF-8"
            })
        }).map(function (response) {
            var result = response.json();
            this.user = new user_1.User(username, result.forename, result.surname, result.authToken, role);
            return this.user;
        });
    };
    UserContext.prototype.logout = function () {
        this._user = null;
    };
    Object.defineProperty(UserContext.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    return UserContext;
}());
UserContext = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserContext);
exports.UserContext = UserContext;
//# sourceMappingURL=user.context.js.map