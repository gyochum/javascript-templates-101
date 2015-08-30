var express = require('express');
var server = express();
var path = require('path');

//server.use(express.static(__dirname + '/views'));

server.get('/', function(request, response){			
	response.sendFile(path.join( __dirname + '/views/default.html'));	
});

server.listen(3000);
