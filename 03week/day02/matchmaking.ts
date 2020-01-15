'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(girls,boys){

    let girlsLength: number = girls.length;
    let boysLength: number = boys.length;
    let matchedArray: string[] = [];
    
        if (girlsLength < boysLength) {
            for (let i: number = 0; i < boysLength; i++){ 
                if (girls[i]!==undefined){
                    matchedArray.push(girls[i]);
                } 
            matchedArray.push(boys[i]);         
            }
        }
    return matchedArray;
}
console.log(makingMatches(girls, boys));

export = makingMatches;