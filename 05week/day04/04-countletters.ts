'use strict';

export function occurrences(string) {
    let counter = {};
    string.toLowerCase().split('').sort().forEach( char => {
    if (char !== ' '){
      counter[char] ? counter[char]++ : counter[char] = 1; // condition ? expr1 : expr2
    }});
    return counter;
}

console.log(occurrences('alma'));


