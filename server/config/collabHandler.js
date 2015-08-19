var roomModel = require('../room/roomModel.js');
module.exports = function(socket, io) {
  var username = socket.handshake.query.username;
  var roomhash = socket.handshake.query.roomhash;
  var room = roomModel.createOrGetRoom(roomhash);
  console.log('roomhash', roomhash);

  if (room === null) {
    console.error('Collab room is full');
  } else {
    room.users.push(username);
    socket.join(room.id);
    io.sockets.in(room.id).emit('listOfUsers', room.users);
  }

  socket.on('disconnect', function(data) {
    console.log(username, ' DISCONECTED FROM COLLAB ROOM: ', room.id, "with", data);
    room.members--;
    room.users.splice(room.users.indexOf(username), 1);
    io.sockets.in(room.id).emit('listOfUsers', room.users);
    if (room.members === 0) {
      roomModel.removeRoom(room.id);
    }
  });
};
