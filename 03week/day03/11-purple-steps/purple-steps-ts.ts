'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

let xStroke: number = 10;
let yStroke: number = 10;
let xFill: number = 10;
let yFill: number = 10; 

function drawRect(xStroke, yStroke, xFill, yFill) {
    ctx.fillStyle = `rgb(148, 0, 211)`;
    ctx.fillRect(xFill, yFill, 15, 15);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(xStroke,yStroke,15,15);
}
    for (let i: number = 0; i < 19; i++){
    drawRect(xStroke, yStroke, xFill, yFill);
    xStroke+=15;
    yStroke+=15;
    xFill+=15;
    yFill+=15;
}
