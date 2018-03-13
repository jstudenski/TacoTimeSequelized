var express = require("express");
var taco = require("../models/taco.js");

var router = express.Router();

  // router.get('/', function (req, res) {
  //   res.render('index');
  // });


router.get("/", function(req, res) {

  taco.all(function(data) {

    var object = {
      tacos: data
    };
    console.log(object);
    res.render("index", object);
  });
});

router.post("/api/tacos", function(req, res) {
  taco.create([
    req.body.name
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});


router.put("/api/tacos/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  taco.update({
    eaten: "1"
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/tacos/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  taco.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});




// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   taco.update({
//     eaten: req.body.eaten
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });





// Export routes for server.js to use.
module.exports = router;