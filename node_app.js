var http = require('http');
var fs = require('fs');
var firebase = require('firebase');

var express = require("express");
var app     = express();
var connect = require('connect');

app.use(express.static(__dirname + '/'));

/*fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
    });*/

app.listen(8000);


console.log('Server running at http://127.0.0.1:8000/');