'use strict';

// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function xToy (text: string): string {
    if (text.replace('x', 'y') === text) {
        return text;
    } else {
        return xToy(text.replace('x', 'y'));
    } 
}
console.log(xToy('XxanaxXot tilos alkohollal fogyasztani'));


