// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
