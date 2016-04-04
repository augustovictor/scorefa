'use strict';
module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define('Player', {
    name: DataTypes.STRING,
    number: DataTypes.INTEGER,
    team_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Player.belongsTo(models.Team);
      }
    }
  });
  return Player;
};
