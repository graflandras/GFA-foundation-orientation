'use strict';

// Write a recursive function that takes one parameter: n and counts down from n.

function counter (n: number) {
    if (n <= 0) {
        setTimeout(function() {
            console.log(n);
            }, 1000);      
    } else {
        setTimeout(function() {
            console.log(n);
            return counter (n-1);
        }, 1000);      
    }

}
counter(3600);