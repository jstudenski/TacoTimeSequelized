module.exports = function(sequelize, DataTypes) {
  var tacos = sequelize.define("tacos", {
    taco_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    eaten: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return tacos;
};