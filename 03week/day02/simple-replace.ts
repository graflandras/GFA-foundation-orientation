'use strict';

let example: string = 'In a dishwasher far far away';
var re=/dishwasher/gi;
var newstr = example.replace(re, "galaxy")
// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away

console.log(newstr);

export = example;