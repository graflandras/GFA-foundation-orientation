'use strict';
export{}

let abc: string[]=new Array("Arthur","Boe","Chloe");
abc[0] = [abc[2], abc[2] = abc[0]][0];
console.log(abc);

