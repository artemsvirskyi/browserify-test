var path = require('path'),
	componentsPath = path.join(process.cwd(), 'app/components'),
	components = require('./src/components')(componentsPath);

