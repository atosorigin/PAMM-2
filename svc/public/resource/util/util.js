"use strict";

var app$ = {
    modulePath : function(moduleId, childModule) {
        return moduleId.substring(0, moduleId.lastIndexOf("/")) + "/" + childModule;
    }
};