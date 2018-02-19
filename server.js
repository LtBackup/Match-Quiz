// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Data
// ===========================================================
// var reservations = [];
// var waitlist = [];

// Static directory
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
