var http = require('http');
var firebase = require('firebase')
var express = require('express');
var app = express();

var request = require('request');
var connect = require('connect');

app.use(express.static(__dirname + '/'));

app.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');