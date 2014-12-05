var resolve = require('browser-resolve'),
	path = require('path'),
	filename = path.join(__dirname, '/aliasify/lib');

console.log(filename);

resolve('browserify-transform-tools', { filename: filename }, function(err, path) {
    console.log(path);
});