/*var mdeps = require('module-deps');
var JSONStream = require('JSONStream'),
	fs = require('fs'),
	input = fs.createReadStream('text.txt'),
	out = fs.createWriteStream('out.txt'),
	through2 = require('through2');
	through = require('through'),
	path = require('path');

var md = mdeps();
md.pipe(through2.obj(write)).pipe(out);
md.write({ file: path.resolve('./main.js') });

var write = function(chunk, enc, next) {
	var json = JSON.stringify(chunk, null, '\t');
	this.push(json);
	next();
};*/

var mdeps = require('module-deps');
var JSONStream = require('JSONStream');
var	path = require('path');
var fs = require('fs');
var	out = fs.createWriteStream('out.txt');
var	through = require('through');

var md = mdeps();
md.pipe(through(function(data) {
	var json = JSON.stringify(data, null, '\t');
	this.queue(json);
}, function(){
	this.queue(null);
})).pipe(out);
md.end(path.resolve('./main.js'));