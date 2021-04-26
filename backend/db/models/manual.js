'use strict';
module.exports = (sequelize, DataTypes) => {
  const Manual = sequelize.define('Manual', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      tpye: DataTypes.INTEGER,
      allowNull: false,
      references: {model: 'Users'}
    }
  }, {});
  Manual.associate = function(models) {
    // associations can be defined here
    Manual.belongsTo(models.User, { foreignKey: "userId"})
    Manual.hasMany(models.Stratagem, {foreignKey: "manualId"})
  };
  return Manual;
};