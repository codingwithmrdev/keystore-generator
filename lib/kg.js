"use strict";

const path = require('path');
const pkg = require("../package.json");
const fs = require('fs')

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
};

kg.checkSourceExists = function(src) {
    try {
        if (fs.lstatSync(src).isFile()) {
            const ext = path.extname(src);

            if (ext === '.apk') {
                return true;
            }
            
            return false;
        }

        return false;
    } catch(err) {
        return false;
    }
};

module.exports = kg;