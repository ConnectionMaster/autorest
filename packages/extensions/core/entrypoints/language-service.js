#!/usr/bin/env node --max_old_space_size=16384
// load modules from static linker filesystem.
try {
  if (process.argv.indexOf('--no-static-loader') === -1 && process.env['no-static-loader'] === undefined && require('fs').existsSync(`${__dirname}/../dist/static-loader.js`)) {
      require(`${__dirname}/../dist/static-loader.js`).load(`${__dirname}/../dist/static_modules.fs`);
  }
  require (`${__dirname}/../dist/language-service/language-service.js`);  
  
} catch (e) {
  console.error(e);
}