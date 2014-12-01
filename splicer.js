var splicer = require('labeled-stream-splicer');
var	fs = require('fs');
var	input = fs.createReadStream('text.txt');
var	output = fs.createWriteStream('out.txt');
var	through2 = require('through2');
var	through = require('through');
var	path = require('path');

var transform = through2.obj(function(chunk, enc, next){
	console.log('1' + chunk);
	this.push(chunk);
	next();
});

var transform2 = through2.obj(function(chunk, enc, next){
	console.log('2' + chunk);
	// this.push({b: 1, a: 2});
	next();
});

var pipeline = splicer([transform, transform2]);

pipeline.write('asdfasdf');
pipeline.write('asdfasdfasdf');
pipeline.write('asdfasdfasdfasdfsadf');