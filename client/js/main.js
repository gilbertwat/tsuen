'use strict';
import $ from 'jquery';
import io from 'npm:socket.io-client@1.4.4';

var socket = io();
socket.on('display', function(website) {
  console.log('display:' + website);
  $('.website').html(website);
});

$('form').submit(function(e) {
  e.preventDefault();
  let website = $('#website').val();
  console.log(website);
  socket.emit('browser on', website);
});
