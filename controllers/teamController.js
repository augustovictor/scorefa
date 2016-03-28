// Revealing module pattern
var teamController = function(Team) {

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
    Team.findById(req.params.id, function(err, team) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(team);
      }
    });
  };

  var post = function(req, res) {
    var team = new Team(req.body); // Only creates a new instance of team
    team.save();
    res.send(201).send(team); // Created
  };

  return {
    get: get,
    getOne: getOne,
    post: post
  };

};

module.exports = teamController;
