var challengesController = require('./challengesController.js');

module.exports = function (app) {
  app.get('/getchallenge', challengesController.getChallenge);
};