// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//config the express app
var app = express();
//letting heroku choose a port
var PORT = process.env.PORT || 8080;

// giving the public directory access to static CSS
app.use(express.static(__dirname + "/app/css"));

//adding app middleware that parses incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// add the API and HTML routes
require(path.join(__dirname,"./app/routing/apiRoutes.js"))(app);
require(path.join(__dirname,"./app/routing/htmlRoutes.js"))(app);

//listening to the connection port
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});