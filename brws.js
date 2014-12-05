var fs = require('fs'),
	file = fs.createWriteStream('bundle.js'),
	Browserify = require('browserify'),
	b,
	path = require('path'),
	resolve = require('./src/resolve');

var fs = require('fs');

b = new Browserify('./main.js', {resolve: resolve});

b.bundle().pipe(file);
