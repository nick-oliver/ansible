// Simple Express web server.
// @see http://howtonode.org/getting-started-with-express

// Load the express module

var express = require('express');
var app = express();

// Respond to requests for / with 'Hello World'
apt.get('/', function(req, res){
	res.send('Hello World!');
});

// Listen on port 80 (Like a true web server)
app.listen(80);
console.log('Express server started successfully');