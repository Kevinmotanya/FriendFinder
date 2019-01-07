// Adding the application Dependencies
var express = require("express");
var path = require('path');
var bodyParser = require('body-parser');

// instantiate the express app.
var app = express();
//letting heroku choose a port
var PORT = process.env.PORT || 8080;

// Set/add the express middleware that parses incoming body requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//application Router
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);
//makes the server to initiate a connection port after listening
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("FriendFinder Server listening on: http://localhost:" + PORT);
});




