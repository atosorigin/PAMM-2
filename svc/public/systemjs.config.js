/**
 * System configuration
 */
(function (global) {
    System.config({
        defaultJSExtensions: true,
        paths: {
            // paths serve as alias
            "npm:": "node_modules/"
        },
        // map tells the System loader where to look for things
        map: {
            // location of the appliction
            app: "app",

            // angular bundles
            "@angular/core": "npm:@angular/core/bundles/core.umd.js",
            "@angular/common": "npm:@angular/common/bundles/common.umd.js",
            "@angular/compiler": "npm:@angular/compiler/bundles/compiler.umd.js",
            "@angular/platform-browser": "npm:@angular/platform-browser/bundles/platform-browser.umd.js",
            "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
            "@angular/http": "npm:@angular/http/bundles/http.umd.js",
            "@angular/router": "npm:@angular/router/bundles/router.umd.js",
            "@angular/forms": "npm:@angular/forms/bundles/forms.umd.js",
            "@angular/upgrade": "npm:@angular/upgrade/bundles/upgrade.umd.js",
            "@angular/upgrade/static": "npm:@angular/upgrade/bundles/upgrade-static.umd.js",

            // other libraries
            "rxjs": "npm:rxjs",
            "angular-in-memory-web-api": "npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js",

            "angular2-modal": "npm:angular2-modal/bundles/angular2-modal.umd",
            "angular2-modal/plugins/bootstrap": "npm:angular2-modal/bundles/angular2-modal.bootstrap.umd"
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            "app": {
                main: "./main",
                defaultExtension: "js"
            },
            "rxjs": {
                defaultExtension: "js"
            }
        }
    });

    System.import("app").catch(function (err) {
        console.error.bind(console);
    });
})(this);
