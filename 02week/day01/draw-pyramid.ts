// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

'use strict';
export {}

let lineCount: number = 4;

for (var i = 0; i < lineCount; i++) { // annyiszor fusson, mint amennyi a lineCount, i minden futás után +1-gyel növekszik
    var str = ''; // szóköz definiálása
        for (var j = 1; j < lineCount-i; j++) {  
        str = str + ' ';
        }
            for (var k = 1; k <= (2 * i + 1); k++) {
            str = str + '*';
            }
    console.log(str);
}

