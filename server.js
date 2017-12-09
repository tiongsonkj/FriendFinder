// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// default, catch-all route that leads to home.html which displays the home page.
app.use( function(request, response) {
	response.sendFile(path.join(__dirname, "app/public/home.html"));
});

$.("#survey")

// Make server listen
app.listen(port, function() {
    console.log("Kelvin's App listening on PORT: " + port);
});