'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let a: number[][] = [[10, 10], [290, 10], [290, 290], [10, 290]];
let b: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];


function createBox(array: number[][]) {
 for (let i = 0; i < array.length; i++) {
   ctx.strokeStyle = "green";
   ctx.beginPath();
   ctx.moveTo(array[i][0], array[i][1]);
   ctx.lineTo(array[i + 1][0], array[i + 1][1]);
   ctx.stroke();
 }

}
createBox(b);

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]