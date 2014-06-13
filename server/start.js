/**
 * UniPhi Node.js server component
 * Third Prototype started by Sven K.
 *
 * (c) 2014 The UniPhi developer team
 * Licensed as GPL v3
 **/

var mongoose = require('mongoose');
var conf = require("./conf.js");

mongoose.connect(conf.db_credentials);

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
