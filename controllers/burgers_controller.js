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

router.post("/api/burgers", function(req, res){
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result){
        res.json({ id: result.insertId });
    });
});

router.put("/api/cats/:id", function(req, res){
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