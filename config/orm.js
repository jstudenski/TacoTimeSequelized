var connection = require("../config/connection.js");

// selectAll()
// insertOne()
// updateOne()

var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });

  },

  insertOne: function(table, name, cb) {
    var queryString = "INSERT INTO " + table + " (taco_name) VALUES (?)";
    connection.query(queryString, name, function(err, result) {
      if (err) throw err;
      cb(result);
    });

  },

  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table + " SET eaten = 1 WHERE "+condition

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;


