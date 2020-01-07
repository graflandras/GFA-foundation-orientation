'use strict';
export{}

let numlist: number[]= [1, 2, 3, 8, 5, 6];
let changedArr: number[]=numlist.map(function (change) {
    if (change === 8) {
        return 4;
    } return change;
});
console.log(changedArr[3]);