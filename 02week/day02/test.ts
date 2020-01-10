'use strict';
export {}

let lineCount: number = 4;

for (var i = 0; i < lineCount; i++) { 
    var str = '$';                                      // ez miért kell ide? 
        for (var j = 1; j < lineCount-i; j++) {         // a sorok elejére 'lineCount-i' darab szóközt tesz
        str = str + '.';
        }
            for (var k = 1; k <= (2 * i + 1); k++) {
            str = str + '*';
            }
    console.log(str);
}