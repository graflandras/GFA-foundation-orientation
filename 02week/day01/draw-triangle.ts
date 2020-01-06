'use strict';
export {}
// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
let lineCount: number = 4;
let piramis: string = "*";
let i: number = null;

for (i = 0; i < lineCount; i++) {
    console.log(piramis);
    piramis = piramis + "*";
}