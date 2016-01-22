'use strict';
var socketio = require('socket.io');
var socketListener = require('./listener.js');

module.exports = (http) => {
  var io = socketio(http);
  
  io.on('connection', function(socket) {
    console.log('a user connected');
    
    socketListener.init(socket);

    io.on('disconnect', function(socket) { 
      console.log('a user disconnected');
    });
  });

  return io;
}
