import * as Commander from 'commander';

import version from './constants/version';

Commander.command('generate <schematic> <path>')
  .alias('g')
  .description('Generates a react component based on the given schema')
  .action((schematic, path) => {
    console.log(schematic, path);
  });

Commander.command('version')
  .alias('v')
  .description('Outputs the version of the tools')
  .action(() => {
    console.log(version);
  });

Commander.parse(process.argv);
