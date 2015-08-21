// boot up express express and mongoose
var express = require('express');
var mongoose = require('mongoose');
var app = express();
var server = require('http').Server(app);
var env = process.env.NODE_ENV;

if (env === 'development') {
  require('dotenv').load();
}

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/meals-development');

// configure our server with all the middleware and and routing
require('./config/middleware.js')(app, express);

server.listen(process.env.PORT || 3000);

////////////////////////////////////////////////////////////
// init socket stuff
////////////////////////////////////////////////////////////

// Declare io for the socket... Just creating an instance of the sokcet library
var io = require('socket.io')(server);

io.on('connection', function(socket) {
  var handler = socket.handshake.query.handler;
  if (handler === 'dashboard') dashboardHandler(socket, io);
  if (handler === 'battle') battleHandler(socket, io);
  if (handler === 'collab') collabHandler(socket, io);
});

// set up handlers for separate sockets
var battleHandler = require('./config/battleHandler.js');
var dashboardHandler = require('./config/dashboardHandler.js');
var collabHandler = require('./config/collabHandler.js');


// For handling various sockets, goto socket battleHandler in config js
// io.on('connection', function(socket){
//   var handler = socket.handshake.query.handler;
//   if (handler === 'battle') battleHandler(socket, io);
//
// });

// export our app for testing and flexibility, required by index.js
module.exports = app;

/* Walkthrough of the server

  Express, mongoose, and our server are initialzed here
  Next, we then inject our server and express into our config/middleware.js file for setup.
    We also exported our server for easy testing

  middleware.js requires all express middleware and sets it up
  our authentication is set up there as well
  we also create individual routers for are two main features, links and users
  each feature has its own folder with a model, controller, and route file
    the respective file is required in middleware.js and injected with its mini router
    that route file then requires the respective controller and sets up all the routes
    that controller then requires the respective model and sets up all our endpoints which respond to requests

*/
