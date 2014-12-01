var through2 = require('through2'),
	fs = require('fs');

fs.createReadStream('./text.txt')
	.pipe(through2(function(chunk, enc, next){
		this.push('some');
		next();
	}))
	.pipe(fs.createWriteStream('out.txt'));