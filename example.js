var browserify = require('browserify-middleware');
var express = require('express');

var app = express();
app.get('/', function (req, res) { res.sendFile(__dirname + '/example.html') });
app.get('/index.js', browserify(__dirname + '/index.js'));
app.use(express.static(__dirname));
app.listen(1234);
