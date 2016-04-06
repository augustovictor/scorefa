'use strict';
module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define('Player', {
    name: DataTypes.STRING,
    number: DataTypes.INTEGER,
    teamId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Player.belongsTo(models.Team, {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return Player;
};
