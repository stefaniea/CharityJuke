var http = require('http');
var fs = require('fs');
var firebase = require('firebase');

var express = require("express");
var app     = express();
var connect = require('connect');

app.use(express.static(__dirname + '/'));

app.listen(8000);

console.log('Server running at http://127.0.0.1:8000/');
