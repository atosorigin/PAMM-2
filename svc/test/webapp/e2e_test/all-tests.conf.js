require("./setup/conf.js");

config.cucumberOpts.require = [
    "feature/**/*.step.js"
];

config.specs = [
    "feature/**/auth/login/*.feature"
];

config.resultJsonOutputFile = config.params.reportPath + "all-tests.json";

exports.config = config;
