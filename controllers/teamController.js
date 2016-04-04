var models = require('../models/index');

// Revealing module pattern
var teamController = function(Team) {

  var teamMiddleware = function(req, res, next) {

    models.Team.find({
      where: {
        id: req.params.id
      }
    }).then(team => {
      if (team) {
        req.team = team;
        next();
      } else {
        res.status(404).send('No teams found.');
      }
    }).catch(err => {
      res.status(500).send(err);
    });
  };

  var get = function(req, res) {
    var query = {};
    if (req.query.name) {
      query.name = req.query.name;
    }

    models.Team.findAll({query}).then((teams) => {
      res.json(teams);
    }).catch(err => {
      res.status(500).send(err);
    });
  };

  var getOne = function(req, res) {
    res.json(req.team);
  };

  var post = function(req, res) {
    // var team = new Team(req.body); // Only creates a new instance of team

    if (!req.body.name) {
      res.status(400);
      res.send('Name is required');
    } else {
      models.Team.create({
          name:  req.body.name,
          coach: req.body.coach
        }).then((team) => {
          res.status(201);
          res.send(team); // Created
        }).catch(err => {
          res.send(err);
        });
    }
  };

  var put = function(req, res) {
    console.log(req);
    req.team.updateAttributes({
      name: req.body.name,
      coach: req.body.coach
    }).then(team => {
      res.send(team);
    }).catch(err => {
      res.send(err);
    });
  };

  var remove = function(req, res) {
    req.team.remove(function(err) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(204).send('Removed');
      }
    });
  };

  return {
    get: get,
    getOne: getOne,
    post: post,
    put: put,
    remove: remove,
    teamMiddleware: teamMiddleware
  };

};

module.exports = teamController;
