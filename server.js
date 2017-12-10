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

// display first because we want to display this in html pages
require('./app/routing/apiRoutes.js')(app);

require('./app/routing/htmlRoutes.js')(app);

// Make server listen
app.listen(port, function() {
    console.log("Kelvin's App listening on PORT: " + port);
});