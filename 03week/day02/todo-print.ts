'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';
let sliced = `My todo:${todoText.slice(0, 0)}\n`+todoText+' - Download games\n'+'\t - Diablo';
todoText = sliced;

console.log(todoText);