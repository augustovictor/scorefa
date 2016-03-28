// Revealing module pattern
var teamController = function(Team) {

  var teamMiddleware = function(req, res, next) {
    Team.findById(req.params.id, function(err, team) {
          if (err) {
            res.status(500).send(err);
          } else if (team) {
            req.team = team;
            next();
          } else {
            res.status(404).send('No teams found.');
          }
        });
  };

  var get = function(req, res) {
    var query = {};
    if (req.query.name) {
      query.name = req.query.name;
    }

    Team.find(query, function(err, teams) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.json(teams);
        }
      });
  };

  var getOne = function(req, res) {
    res.json(req.team);
  };

  var post = function(req, res) {
    var team = new Team(req.body); // Only creates a new instance of team
    team.save();
    res.send(201).send(team); // Created
  };

  var put = function(req, res) {
    Team.findById(req.params.id, function(err, team) {
      req.team.name = req.body.name;
      req.team.coach = req.body.coach;
      req.team.save();
      res.json(req.team);
    });
  };

  return {
    get: get,
    getOne: getOne,
    post: post,
    put: put,
    teamMiddleware: teamMiddleware
  };

};

module.exports = teamController;
