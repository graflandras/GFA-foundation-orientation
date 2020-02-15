'use strict';

// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

//console.log(Math.floor(12/10));

function sum(n: number) {
    if (n < 10) {
        return n;
    } else {
        return n % 10 + sum(Math.floor(n / 10));
    }
}

console.log(sum(111));