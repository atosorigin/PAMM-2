require("../setup/conf.js");

config.cucumberOpts = {
    //format: "summary",
    require: [
        "registration.step.js"
    ]
};

config.specs = [
    "registration.feature"
];

exports.config = config;

