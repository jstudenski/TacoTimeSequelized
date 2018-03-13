var orm = require("../config/orm.js");

var taco = {
  all: function(cb) {
    orm.selectAll("tacos", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(newTacoName, cb) {
    orm.insertOne("tacos", newTacoName, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("tacos", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("tacos", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = taco;
