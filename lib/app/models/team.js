'use strict';
module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define('Team', {
    name: DataTypes.STRING,
    coach: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Team.hasMany(models.Player);
      }
    }
  });
  return Team;
};
