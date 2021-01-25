const { lookupService } = require("dns");


// Dependencies
var connection = require("./connection.js");

//ORM
// ===============================================================

var tableName = "burgers";

var orm = {

    // Creating query to select all from burgers table
    selectALL: function(callback) {
        var s = "SELECT * FROM " + tableName;

        connection.query(s, function(err, results){
            callback(results);
        });
    },

    // Creates insert query to add a burgers
    insertOne: function(burger, callback){

    },

    updateOne: function(){

    }

}