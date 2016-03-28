var express = require('express');

var routes = function(Team) {

  var teamRouter = express.Router();
  var teamController = require('../controllers/teamController')(Team);

  teamRouter.use('/:id', teamController.teamMiddleware);

  teamRouter.route('/')
    .get(teamController.get)
    .post(teamController.post);

  teamRouter.route('/:id')
    .get(teamController.getOne)
    .put(teamController.put);

  return teamRouter;

};

module.exports = routes;
