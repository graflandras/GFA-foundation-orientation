'use strict';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

function countLines(d){
    
try {
    let fileContent = fs.readFileSync(d, 'utf-8');

    var lines = fileContent.toString().split('\n').length;
    
    console.log(lines);

} catch (error) {
    console.log("0");
}}

countLines("my-file.txt")
