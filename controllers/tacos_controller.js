// Node Dependencies
var express = require('express');
var router = express.Router();
var models = require('../models'); // Pulls out the Burger Models

// Extracts the sequelize connection from the models object
var sequelizeConnection = models.sequelize;

// Sync the tables
sequelizeConnection.sync();

router.get('/', function (req, res) {
  res.redirect('/index');
});


// Index Page (render all burgers to DOM)
router.get('/index', function (req, res) {

  models.tacos.findAll().then(function(data){
    console.log(data.length);
    var object = { tacos: data };
    res.render("index", object);
  })

});


// Create a New Burger
router.post('/api/tacos', function (req, res) {

  // Sequelize Query to add new burger to database
  models.tacos.create(
    {
      taco_name: req.body.name
    }
  ).then(function(){
    //res.json({ id: result.insertId });
    // After the burger is added to the database, refresh the page
    res.redirect('/index');
  });

});



// router.post("/api/tacos", function(req, res) {
//   models.create([
//     req.body.name
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });


router.put("/api/tacos/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  models.update({
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
  models.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});



// Export routes for server.js to use.
module.exports = router;