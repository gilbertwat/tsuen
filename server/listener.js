'use strict';

module.exports = {
  init :(socket) => {
    socket.on('browser on', function(url) {
      console.log(url + ": " + url.indexOf('facebook'));
      if (url.indexOf('facebook') > -1) {
        socket.emit('display', 'facebook');
      }
    });
  }
};
