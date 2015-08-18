var duelController = require('./duelController.js');

module.exports = function (app) {
  // app.post('/getduel', duelController.getDuel);
  // app.post('/attemptduel', duelController.attemptDuel);
  app.all('/', function(req, res, next){
    console.error('THIS SHOULD NOT BE HAPPENING!! /api/duel/ route is discontinued');
    throw 'THIS SHOULD NOT BE HAPPENING!! /api/duel/ route is discontinued';
  })
};
