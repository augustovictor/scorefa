var should = require('should');
var sinon = require('sinon');

describe('teamControllerTests', function() {

  describe('get()', function() {

  });

  describe('post()', function() {
    it('should not allow empty name on post', function() {
      var Team = function(team) {
        this.save = function() {};
      };

      var req = {
        body: {
          coach: 'Victor'
        }
      };

      var res = {
        status: sinon.spy(),
        send: sinon.spy()
      };

      var teamController = require('../controllers/teamController')(Team);

      teamController.post(req, res);

      res.status.calledWith(400).should.equal(true, 'Bad Status ' + res.status.args[0][0]);
      res.send.calledWith('Name is required').should.equal(true);
    });
  });
});
