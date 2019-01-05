// Adding the application Dependencies
var express = require("express");
<<<<<<< HEAD
var bodyParser = require("body-parser");
var path = require("path");

//config the express app
=======
var path = require('path');
var bodyParser = require('body-parser');

// instantiate the express app.
>>>>>>> 88dbfcd867f3449a344faed7b3a78d2614800da5
var app = express();
//letting heroku choose a port
var PORT = process.env.PORT || 8080;

<<<<<<< HEAD
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
=======
// Set/add middleware that parses incoming body requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//application Router
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);
>>>>>>> 88dbfcd867f3449a344faed7b3a78d2614800da5

//listening to the connection port
app.listen(PORT, function() {
<<<<<<< HEAD
	console.log("App listening on PORT: " + PORT);
});
=======
  // Log (server-side) when our server has started
  console.log("FriendFinder Server listening on: http://localhost:" + PORT);
});
>>>>>>> 88dbfcd867f3449a344faed7b3a78d2614800da5
