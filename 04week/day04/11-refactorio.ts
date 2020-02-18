'use strict';

// Create a recursive function called `refactorio`
// that returns it's input's factorial

function reFactorio(n: number): number {
    if (n <= 1) { 
        return 1;
      }
      else {
        return n * reFactorio(n - 1);
      }
    }
console.log(reFactorio(5));