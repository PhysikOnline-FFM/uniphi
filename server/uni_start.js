var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var builder="";

function appendit(term) {
	builder = builder + JSON.stringify(term, null, 2);
}

app.get('/search/:parameter?', function(req,res,next) {
	var parameter = req.params.parameter;
	
	console.log(parameter + ' getting searched.');
	
	MongoClient.connect("mongodb://localhost:27017/uniphi", function(err, db) {
		  if(err) { return console.dir(err); }
		  else { builder = ""; }

		  var collection = db.collection('uniphi');

		  var stream = collection.find({'keywords' : parameter}).stream();
		  stream.on("data", function(item) { appendit(item); });
		  stream.on("end", function() { res.send(builder); });

	});

});

app.get('/search/*?', function(req, res) {
	res.send('no search param');
	console.log('Query without param.');
});

app.get('/?', function(req, res) {
	res.send('Welcome to UniPhi Webservice. For API search...');
	console.log('No Request sent.');
});

var port = 8080;
app.listen(port);
console.log('Listening on port' + port);