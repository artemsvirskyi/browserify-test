var path = require('path'),
	fs = require('fs'),
	componentsPath = path.join(process.cwd(), 'app/components'),
	names = getDirectories(componentsPath),
	mains = getMainFiles(names),
	components = getFullPaths(names, mains);

function getDirectories(dir) {
	return fs.readdirSync(dir).filter(function(file) {
		return fs.statSync(path.join(dir, file)).isDirectory();
	});
}

function getMainFiles(names){
	return names.map(function(name){
		var bowerPath = path.join(componentsPath, name, 'bower.json'),
			main = 'index.js';

		if(fs.existsSync(bowerPath)){
			bower = require(bowerPath);

			if(bower.main){
				main = bower.main;
			}
		}

		return main;
	}, this);
}

function getFullPaths(names, mains){
	var components = {};

	names.forEach(function(name, index){
		components[name] = path.join(componentsPath, name, mains[index]);
	});

	return components;
}

module.exports = components;

/*var bower = require('bower');

bower.commands.list({paths: true}).on('end', function(results){
	console.log(results);
});*/

/*var path = require('path'),
	fs = require('fs'),
	Promise = require('es6-promise').Promise,
	componentsPath = path.join(process.cwd(), 'app/components');

function readdir(dir){
	return new Promise(function(resolve, reject){
		fs.readdir(dir, function(err, items){
			err ? reject(err) : resolve(items);
		});
	});
}

function objectify(items){
	return items.map(function(item){
		return {name: item};
	});
}

function filterComponents(items){
	return Promise.all(items.map(getDirectoryStat)).then(filterDirectories);
}

function getDirectoryStat(item){
	return new Promise(function(resolve, reject){
		fs.stat(path.join(componentsPath, item.name), function(err, stats){
			if(err) reject(err)

			item.isDirectory = stats.isDirectory();
			resolve(item);
		});
	});
}

function filterDirectories(items){
	return items.filter(function(item){
		return item.isDirectory;
	});
}

function getMains(components){
	return Promise.all(components.map(getMain));
}

function getMain(component){
	component.bowerPath = path.join(componentsPath, component.name, 'bower.json');
	component.main = 'index.js';

	return exists(component.bowerPath)
		.then(function(exists){
			return exists ? getMainFromBower(component) : component;
		});
}

function exists(path){
	return new Promise(function(resolve, reject){
		fs.exists(path, function(exists){
			resolve(exists);
		});
	});
}

function getMainFromBower(component){
	return new Promise(function(resolve, reject){
		fs.readFile(component.bowerPath, function(err, data){
			var main;

			if(err) reject(err);


			main = JSON.parse(data).main;

			if(main){
				component.main = main;
			}

			resolve(component);
		});
	});
}

function hashify(components){
	var hash = {};

	components.forEach(function(component){
		hash[component.name] = component.main;
	});

	return hash;
}

function getComponents(){
	return readdir(componentsPath)
		.then(objectify)
		.then(filterComponents)
		.then(getMains)
		.then(hashify)
		.catch(function(err){
			console.log(err);
		});
}

module.exports = getComponents;*/