var express = require("express");

var router = express.Router();

// Importing burger model
var burger = require("../models/burgers");

//Creating routes
router.get("/", function(req, res){
    burger.selectAll(function(data){
        var burgObj = {
            burgers: data
        };
        console.log(burgObj);
        res.render("index", burgObj);
    });
});