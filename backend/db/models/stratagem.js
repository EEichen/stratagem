'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stratagem = sequelize.define('Stratagem', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    text: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    manualId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Stratagem.associate = function(models) {
    // associations can be defined here
    Stratagem.belongsTo(models.Manual, {foreignKey: 'manualId'})
  };
  return Stratagem;
};