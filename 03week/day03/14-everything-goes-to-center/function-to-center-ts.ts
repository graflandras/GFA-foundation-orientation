'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE


// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.
let x: number = 0;
let y: number = 0;

function drawLine (x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke();
    }
    
    for (let i: number = 0; i < 30; i++){
            drawLine (x, 0);
            x+=20;
        }
    for (let k: number = 0; k < 30; k++){
            drawLine (x, 400);
            x-=20;
        }
    for (let j: number = 0; j < 20; j++){
            drawLine (600, y);
            y+=20;
        }
    for (let l: number = 0; l < 20; l++){
            drawLine (0, y);
            y-=20;
    }
    
