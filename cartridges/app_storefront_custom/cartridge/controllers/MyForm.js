"use strict";

var server = require("server");

server.get("Sample", function(req, res, next) {
    res.render("form/sample");

    return next();
});

module.exports = server.exports();
