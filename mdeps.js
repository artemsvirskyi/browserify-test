var mdeps = require('module-deps');
var JSONStream = require('JSONStream'),
	fs = require('fs'),
	input = fs.createReadStream('text.txt'),
	out = fs.createWriteStream('out.txt'),
	through2 = require('through2');
	through = require('through'),
	path = require('path');

var md = mdeps();
md.pipe(through(function (data) {
    var json = JSON.stringify(data, null, '\t');
    this.queue(json);
  },
  function (data) {
    this.queue(null);
  })).pipe(out);
md.write({ file: path.resolve('./main.js') });

var rs = new require('stream').Writable();
