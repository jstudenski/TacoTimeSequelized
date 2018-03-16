// Node Dependencies
var express = require('express');
var router = express.Router();
var models = require('../models'); // Pulls out the Burger Models

// Extracts the sequelize connection from the models object
var sequelizeConnection = models.sequelize;

// Sync the tables
sequelizeConnection.sync();

// Redirect to index
router.get('/', function (req, res) {
  res.redirect('/index');
});


// Index Page (render all tacos to DOM)
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
    console.log("worked");
    //res.json({ id: result.insertId });
    res.redirect('/index');
  });

});


router.put("/api/tacos/:id", function(req, res) {

  models.tacos.update({
    eaten: "1" },
    {where: {id: req.params.id}}
  ).then(function(dbPost) {
   res.json(dbPost)
 })

});



// router.delete("/api/tacos/:id", function(req, res) {
//   var condition = "id = " + req.params.id;
//   models.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });


  // DELETE route for deleting posts
router.delete("/api/tacos/:id", function(req, res) {
    models.tacos.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
});



// Export routes for server.js to use.
module.exports = router;

// router.post("/api/tacos", function(req, res) {
//   models.create([
//     req.body.name
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

