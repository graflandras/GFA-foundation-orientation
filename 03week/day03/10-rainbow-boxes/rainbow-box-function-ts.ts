'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawRectangles(h, c) {
    ctx.fillRect((canvas.width / 2) - (h / 2), (canvas.height / 2) - (h / 2), h, h);
    ctx.fillStyle = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}`;
}

for (let i: number = 30; i > 0; i--){
    drawRectangles((13 * i), 7 * i);    
}
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

/*$ node
> Math.random()
0.6454423187235743
> Math.floor(Math.random()*255)
63
> .exit*/