'use strict';

// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function xToy (text: string): string {
    if (text.replace('x', '') === text) {
        return text;
    } else {
        return xToy(text.replace('x', ''));
    } 
}
console.log(xToy('XxanaxXot tilos alkohollal fogyasztani'));


