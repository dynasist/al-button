// https://medium.com/@nickcis/jest-passing-custom-arguments-d44ef3f2defb

'use strict';

// example
// node tests/js/runner.js --json --outputFile=jest.results.json --url "<url>" --username <name> --password <pass>

const config = {
  url: '',
  username: '',
  password: ''
};
const argv = process.argv.slice(0, 2);

// Native argv parsing
process.argv
  .reduce((cmd, arg) => {
    if (cmd) {
      config[cmd] = arg;
      return;
    }

    if (arg.startsWith('--')) {
      const sub = arg.substring('--'.length);
      if (Object.keys(config).includes(sub)) {
        if (typeof config[sub] === 'boolean') {
          config[cmd] = true;
          return;
        }

        return sub;
      }
    }

    argv.push(arg)
  });

// Store configuration on env
process.env.__CONFIGURATION = JSON.stringify(config);

console.log(config);

// Setting real ARGV
process.argv = argv;

// Calling jest runner
require('jest-cli/bin/jest');