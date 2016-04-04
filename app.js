// Modules
var express    = require('express');
var Sequelize  = require('sequelize');
var bodyParser = require('body-parser');

// Definitions
var app        = express();
var port       = process.env.PORT || 3000;

// DB Connection
var connection = new Sequelize('scorefa', 'root', 'root');

var Team = connection.define('team', {
  name: {
    type: Sequelize.STRING,
    unique: true
  },
  coach: {
      type: Sequelize.STRING
    }
});

connection.sync({
  force: true,
  logging: console.log
}).then(function() {
  console.log('Db OK');
}).catch(function(err) {
  console.error(err);
});

// Middlewares
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

//Models
var Team = require('./models/team');

//Routes
var teamRouter = require('./routes/teamRoutes')(Team);
app.use('/api/teams', teamRouter);

app.get('/', function(req, res) {
  res.send('Welcome to scorefa api');
});

//Server
app.listen(port, function() {
  console.log('Gulp is running on http://localhost:' + port);
});

module.exports = app;
