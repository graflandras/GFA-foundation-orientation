'use strict';

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const fs = require('fs');

function readFromFile(fileName: string): string {
    try {
      return fs.readFileSync(fileName, 'utf-8');
    } catch (e) {
      console.log(0);
      return null;
    }
}

function uniqueIPs(file: string): void {

    if (readFromFile(file) !== null) {

        let fileContent = readFromFile(file).split('   ');
        let ipArray: string[] = [];

            for (let sort: number = 1; sort < fileContent.length; sort += 2) {
            ipArray.push(fileContent[sort]);
            }

        let result = ipArray.filter((element, index, array) => {
            if (array.indexOf(element) === index) {
                return element;
            }
        })
        console.log(result);
    }   
}
uniqueIPs('log.txt');

/*

function ratio(fileName: string) {

let getPostRatio: string = fs.readFileSync(fileName, "utf-8").split("\n");
let getCount: number = 0;
let postCount: number = 0;

    for (let i = 0; i < getPostRatio.length; i++) {

        if (getPostRatio[i].includes('GET /')) {
            getCount += 1;
        } else if (getPostRatio[i].includes('POST /')) {
            postCount += 1;
        }
    }
    return "GET / POST ratio:  1:" + postCount / getCount;
}

console.log(ratio('log.txt'));
