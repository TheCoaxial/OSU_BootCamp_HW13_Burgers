const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;



//Serve static content for the app from "public"
app.use(express.static("public"));

//Parse app body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//start server
app.listen(PORT, function() {

    console.log("Server listening on: http://localhost:" + PORT);
});
