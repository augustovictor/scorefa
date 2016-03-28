var express = require('express');

var routes = function(Team) {

  var teamRouter = express.Router();
  var teamController = require('../controllers/teamController')(Team);

  teamRouter.route('/')
    .get(teamController.get)
    .post(teamController.post);

  teamRouter.route('/:id')
    .get(teamController.getOne);

  return teamRouter;

};

module.exports = routes;
