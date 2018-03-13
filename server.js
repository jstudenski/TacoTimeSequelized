var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

var db = require("./models");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Static Content
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var router = require("./controllers/tacos_controller.js");
app.use('/', router);


// db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });
// });
