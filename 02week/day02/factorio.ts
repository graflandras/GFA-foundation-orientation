'use strict';
export{}

function sum(number) {
    let result: number=1;
    for (let i: number = 1; i<=number; i++){
        result *= i;
    }
return result;

}
console.log(sum(5));