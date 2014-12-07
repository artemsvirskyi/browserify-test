// http://nodejs.org/docs/v0.4.8/api/all.html#all_Together...
var path = require('path'),
	components = require('./src/components'),
	aliases = require('./src/aliases'),
	pkg = require(path.join(process.cwd(), 'package.json'));

pkg.__dirname = path.dirname(process.cwd());

function resolve(id, parent, cb){
	if(isRelativePath(id)){
		return cb(null, nodeResolve(parent.filename, id), pkg);
	}

	if(has(aliases, id)){
		return cb(null, aliases[id], pkg);
	}

	if(has(components, id)){
		return cb(null, components[id], pkg);
	}

	if(has(parent.modules, id)){
		return cb(null, parent.modules[id], pkg);
	}

	return cb(null, "");
};

function nodeResolve(parent, id){
	var file = path.resolve(path.dirname(parent), id);

	try{
		file = require.resolve(file);
	}catch(e){
		file = "";
	}

	return file;
}

function isRelativePath(path){
	return path[0] === '.';
}

function has(target, key){
	return target.hasOwnProperty(key);
}

module.exports = resolve;