var roomModel = require('../room/roomModel.js');
module.exports = function(socket, io) {
  var username = socket.handshake.query.username;
  var roomhash = socket.handshake.query.roomhash;
};
