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
var DataTypeService = (function () {
    function DataTypeService() {
    }
    DataTypeService.prototype.email = function (control) {
        if (control.value.trim().length === 0) {
            return null;
        }
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return EMAIL_REGEXP.test(control.value) ? null : {
            email: {
                valid: false
            }
        };
    };
    DataTypeService.prototype.password = function (control) {
        if (control.value.trim().length === 0) {
            return null;
        }
        var PASSWORD_REGEXP = /^(?=.*\d)(?=.*[a-zA-Z]).{8,255}$/;
        return PASSWORD_REGEXP.test(control.value) ? null : {
            password: {
                valid: false
            }
        };
    };
    DataTypeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataTypeService);
    return DataTypeService;
}());
exports.DataTypeService = DataTypeService;
//# sourceMappingURL=datatype.service.js.map