'use strict';
// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

function xToy (text: string): string {
    if (text.length === 1) {
        return (text);
    } else {
        return xToy(text.substring(0, 1)) + '*' + xToy(text.substring(1, text.length));
    } 
}
console.log(xToy('Abcdefg,.h'));
