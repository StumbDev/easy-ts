var sh = require('shelljs');

sh.echo('Starting postinstall script...');
sh.exec('npm run build');
sh.echo('Finished postinstall script.');
