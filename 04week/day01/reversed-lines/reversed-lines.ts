'use strict';

// Create a method that decrypts reversed-lines.txt

const fs = require('fs');

function readFromFile(fileName: string): string {
    try {
        return fs.readFileSync(fileName, 'utf-8');
    } catch (e) {
        console.log(e.message);
        return null;
    }
}
function reversedLines(fileName: string): string {

    let fileContent: string[] = readFromFile(fileName).split('\r\n');
    let reverse: string[] = [];

    fileContent.forEach(function (element) {
        reverse.push(element.split('').reverse().join(''));
    });
    return reverse.join('\r\n');
}

console.log(reversedLines("reversed-lines.txt"));