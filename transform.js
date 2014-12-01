var util = require('util');
var Transform = require('stream').Transform;

var fs = require('fs');

util.inherits(SimpleProtocol, Transform);

var input = fs.createReadStream('text.txt');
var out = fs.createWriteStream('out.txt');


function SimpleProtocol(options) {
  Transform.call(this, options);
}

SimpleProtocol.prototype._transform = function(chunk, encoding, done) {
  this.push(chunk);
  done();
};

var sp = new SimpleProtocol();

input.pipe(sp).pipe(out);
// Now parser is a readable stream that will emit 'header'
// with the parsed header data.