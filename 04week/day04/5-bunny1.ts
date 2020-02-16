'use strict';

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunnies (n: number): number {
    if (n === 1){
        return 2;
    } else {
        return 2 + bunnies(n-1);
    }
}
console.log(bunnies(500));