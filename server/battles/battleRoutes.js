var battleController = require('./battleController.js');

module.exports = function (app) {
  app.post('/checkvalidbattleroom', battleController.checkvalidbattleroom);
  app.post('/getbattle', battleController.getBattle);
  app.post('/attemptbattle', battleController.attemptBattle);
};
