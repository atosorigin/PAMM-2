"use strict";
var User = (function () {
    function User(_username, _forename, _surname, _token, _role) {
        this._username = _username;
        this._forename = _forename;
        this._surname = _surname;
        this._token = _token;
        this._role = _role;
    }
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this._username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "forename", {
        get: function () {
            return this._forename;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "token", {
        get: function () {
            return this._token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "role", {
        get: function () {
            return this._role;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map