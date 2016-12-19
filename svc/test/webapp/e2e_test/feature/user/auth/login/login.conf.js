require("../../../../setup/conf.js");

config.specs = [
    "login.feature"
];

config.cucumberOpts.require = [
    "login.step.js"
];

config.specs = [
    "login.feature"
];

config.resultJsonOutputFile = config.params.reportPath + "login.json";

exports.config = config;




