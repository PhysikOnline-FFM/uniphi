/**
 * UniPhi Node.js server component
 * Third Prototype started by Sven K.
 *
 * (c) 2014 The UniPhi developer team
 * Licensed as GPL v3
 **/

var mongoose = require('mongoose');
var colors= require("colors");
var conf = require("./conf.js"); 
var util = require('util');

console.log("Welcome to UniPhi".green);
console.log("Configuration: ".red+util.inspect(conf));

try{
  mongoose.connect(conf.db_credentials,  function(err) { if (err) console.log(err); } );
} catch(err) {
  console.log("Failed to connect to "+conf.db_credentials, err.message);
}

// DB models schema, Version 1:
// https://elearning.physik.uni-frankfurt.de/projekt/wiki/UniPhi/Datenbank
var Record = mongoose.model('Record', {
	'title': String,
	'url':	 String
});

// Pending: ExpressJS, ReST-Endpoint, usw.

// Siehe auch https://elearning.physik.uni-frankfurt.de/projekt/wiki/UniPhi/MVC-Framework
// fuer Frameworks, die man im Zusammenhang mit ExpressJS nutzen kann.
// Gibt ein paar Defakto-Standards, zB. Passport.JS.

// Demo:
var express = require('express');
var app = express();

app.get('/', function(req, res) {
	console.log('Hello World!');
	res.send('hello world!');
});

var server = app.listen(8080, 'localhost', function() {
	console.log('Listening on port %d'.green, server.address().port);
});
