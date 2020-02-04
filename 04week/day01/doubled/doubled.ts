'use strict';

// Create a method that decrypts duplicated-chars.txt

const fs = require('fs');

function readFromFile(fileName: string): string {
    try {
      return fs.readFileSync(fileName, 'utf-8');
    } catch (e) {
      console.log(e.message);
      return null;
    }
}

function deleteDoubled(fileName: string) {

    let fileContent: string[] = readFromFile(fileName).split('');
    let soloArray: string[] = [];
  
    fileContent.forEach(function (element, index) {
      if (index % 2 !== 0) {
        soloArray.push(element);
      }
    })
    return soloArray.join('');
}

console.log(deleteDoubled("doubled.txt"));