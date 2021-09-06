"use strict";

var server = require("server");

server.get("Show", function(req, res, next) {
    res.render("carousel/carousel", {
        images: [{ url: "sample" }, { url: "sample" }, { url: "sample" }]
    });
    next();
});

module.exports = server.exports();
