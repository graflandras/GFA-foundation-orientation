'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
function drawRectangles(h) {
    ctx.strokeRect((canvas.width/2)-(h/2), (canvas.height/2)-(h/2), h, h);
}

for (let i: number = 1; i < 4; i++){
    drawRectangles(i * 100);
}

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.