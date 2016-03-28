// Modules
var express    = require('express');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');

// Definitions
var app        = express();
var port       = process.env.PORT || 3000;

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
var teamRouter = require('./routes/teamRoutes')(Team);
app.use('/api/teams', teamRouter);

app.get('/', function(req, res) {
  res.send('Welcome to scorefa api');
});

//Server
app.listen(port, function() {
  console.log('Gulp is running on http://localhost:' + port);
});
