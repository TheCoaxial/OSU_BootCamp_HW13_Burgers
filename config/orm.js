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
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    },

    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    }

}