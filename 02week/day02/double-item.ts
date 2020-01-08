'use strict';
export{}

let drinks: string[] = ["Gin", "Whiskey", "Wine", "Beer"];

drinks.forEach(function (currVal, index, array) { //(currentValue, index, array)
    array[index] += array[index];
});
console.log(drinks);

