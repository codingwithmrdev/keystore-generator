"use strict";

const path = require('path');
const pkg = require("../package.json");

/**
 * kg namespace.
 * @type {Object.<string,*>}
 */
var kg = {};

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

kg.promptQuiz = function(quiz) {
    return new Promise((resolve, reject) => {
        readline.question(quiz, (answer) => {
            answer ? resolve(answer):resolve('Unknown');
        });
    });
};

kg.closeReadline = function() {
    readline.close();
};

kg.printUsage = function() {
    process.stderr.write([
        ' ' + pkg['description'] + ' ' + pkg['version'],
    ].join('\n') + '\n\n' + " Usage: " + path.basename(process.argv[1]) + " key generate\n");
    
    process.exit(1);
}

module.exports = kg;