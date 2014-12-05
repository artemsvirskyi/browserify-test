var path = require('path'),
	fs = require('fs');

function Components(path){
	this.path = path;
	this.names = getDirectories(path);
	this.mains = this.getMainFiles();
}

function getDirectories(path) {
	return fs.readdirSync(path).filter(function(file) {
		return fs.statSync(path.join(path, file)).isDirectory();
	});
}

Components.prototype.getMainFiles = function(){
	this.names.map(function(name){
		var bowerPath = path.join(this.path, name, 'bower.json'),
			main = 'index.js';

		if(fs.existsSync(bowerPath)){
			bower = require(bowerPath);

			if(bower.main){
				main = bower.main;
			}
		}

		return main;
	}, this);
};

module.exports = Components;

/*var bower = require('bower'),
	startTime = Date.now();

bower.commands.list({paths: true}).on('end', function(results){
	console.log(Date.now() - startTime);
	console.log(results);
});*/