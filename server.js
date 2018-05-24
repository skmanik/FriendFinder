// required modules
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// using express
var app = express();

// sets an initial port. used in listener
var PORT = process.env.PORT || 8080;

// sets up express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "app/public")));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// starts server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
