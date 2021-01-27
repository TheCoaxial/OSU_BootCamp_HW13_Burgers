// Something is wrong either here or in burgers.js which is preventing the data from
// the database from being displayed and also causing a crash when its deployed to heroku
// I fell behind due to covid and failed to catch back up in time. I feel like im close but I couldn't figure
// it out in time. 



var express = require("express");

var router = express.Router();

// Importing burger model
var burger = require("../models/burgers.js");

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

router.post("/api/burgers", function(req, res){
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result){
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condtion", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result){
        if (result.changedRows == 0){
            // if nothing changed, return 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;