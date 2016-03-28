// Modules
var express  = require('express');
var mongoose = require('mongoose');
// Definitions
var app  = express();
var port = process.env.PORT || 3000;
var teamRouter = express.Router();
var db;

// DB Connection
db = mongoose.connect('mongodb://localhost/scorefaAPI');

//Models
var Team = require('./models/teamModel');

//Routes
app.use('/api', teamRouter);
teamRouter.route('/teams')
    .get(function(req, res) {
      var query = {};
      if (req.query.name) {
        query.name = req.query.name;
      }

      Team.find(query, function(err, teams) {
        res.json(teams);
      });
    });

app.get('/', function(req, res) {
  res.send('Welcome to scorefa api');
});

//Server
app.listen(port, function() {
  console.log('Gulp is running on http://localhost:' + port);
});
