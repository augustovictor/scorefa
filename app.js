// Modules
var express    = require('express');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
// Definitions
var app        = express();
var port       = process.env.PORT || 3000;
var teamRouter = express.Router();

// DB Connection
var db = mongoose.connect('mongodb://localhost/scorefaAPI');

// Middlewares
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

//Models
var Team = require('./models/teamModel');

//Routes
app.use('/api', teamRouter);
teamRouter.route('/teams')
    .get(function(req, res) {
      Team.find(function(err, teams) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.json(teams);
        }
      });
    });

app.get('/', function(req, res) {
  res.send('Welcome to scorefa api');
});

//Server
app.listen(port, function() {
  console.log('Gulp is running on http://localhost:' + port);
});
