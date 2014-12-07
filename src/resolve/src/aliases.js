var path = require('path'),
	package = require(path.join(process.cwd(), 'package.json')),
	aliases = package.browser || {};

Object.keys(aliases).forEach(function(alias){
	var aliasPath = path.resolve(process.cwd(), aliases[alias]);

	try{
		aliasPath = require.resolve(aliasPath);
	}catch(err){
		err = "Cannot resolve '" + alias + "' alias with '" + aliases[alias] + "' path.";
		throw Error(err);
	}

	aliases[alias] = require.resolve(aliasPath);
});

module.exports = aliases;