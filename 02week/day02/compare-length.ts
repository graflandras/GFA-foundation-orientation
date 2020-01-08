'use strict';
export{}

let firstList: number[]=new Array(1,2,3);
let secondList: number[]=new Array(4,5);

if (firstList.length > secondList.length){
    console.log("firstList has more elements");
} else if (firstList.length < secondList.length){
    console.log("secondList has more elements");
} else {
    console.log("both lists have the same amount of elements");
}

