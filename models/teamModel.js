var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var teamModel = new Schema({
  name: {
    type: String
  },
  coach: {
    type: String
  }
});

module.exports = mongoose.model('Team', teamModel);
