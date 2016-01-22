var settings = require('./settings.json');

var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);

var io = require('./io.js')(http);

app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});
app.get('/js/config.js', function(req, res){
  res.sendFile(path.resolve(__dirname + '/../client/config.js'));
});

app.use('/jspm_packages', express.static(path.resolve(__dirname + '/../client/jspm_packages/')));

app.use('/js', express.static(path.resolve(__dirname + '/../client/js/')));

http.listen(settings.port, function(){
    console.log('listening on *:' + settings.port);
});


