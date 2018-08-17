var express = require("express");
var db = require("./models");

var PORT = process.env.PORT ||8080;
var app = express();

db.sequelize.sync().then(function(){
    app.listen(PORT, function() {
        console.log("Listening on port: " + PORT);
        console.log("this is my err: " + err);
    });
});