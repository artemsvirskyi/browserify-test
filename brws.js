var fs = require('fs'),
	file = fs.createWriteStream('bundle.js'),
	Browserify = require('browserify'),
/*	aliasify  = require('aliasify').configure({
	    aliases: {
	        "foo": "./foo-shim.js"
	    }
	}), */
	b;

b = new Browserify('./main.js');

// b.transform(aliasify);
b.bundle().pipe(file);