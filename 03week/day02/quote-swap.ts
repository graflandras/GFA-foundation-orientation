'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

function quoteSwap(words){
    var temp = words[2];
    words[2] = words[5];
    words[5] = temp;
    words = words.join(" "); //https://www.dyn-web.com/javascript/arrays/convert.php
    return words;
}
console.log(quoteSwap(words));
// Expected output: "What I cannot create I do not understand."

export = quoteSwap;