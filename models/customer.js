'use strict';
module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define('Customer', {
    name: DataTypes.STRING
  });

  Customer.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Customer.hasMany(models.tacos, {
      onDelete: "cascade"
    });
  };

  return Customer;
};
