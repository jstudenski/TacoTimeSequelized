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

  tacos.associate = function(models) {

    tacos.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false
      }
    });
  };



  return tacos;
};