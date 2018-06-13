const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

// reset - delete /build folder
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

// Contracts to be compiled
const contractList = ['cont.sol', 'lib.sol'];
let sources = {};

// Fill sources object
for (let fileName in contractList) {
  const contractPath = path.resolve(__dirname, 'contracts', fileName);
  const source = fs.readFileSync(contractPath, 'utf8');

  sources[fileName] = source;
}

const findImports = fileImport => {
  importPath = path.resolve(__dirname, 'contracts', fileImport);
  return fs.readFileSync(importPath, 'utf8');
};

const output = solc.compile({ sources: sources }, 1, findImports);

for (let contractName in output.contracts)
  console.log(contractName + ': ' + output.contracts[contractName].bytecode);
