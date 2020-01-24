'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawRectangles(x, y, w, h) {
    //ctx.fillStyle = 'rgb(0, 0, 100)';
    ctx.fillRect(x, y, w, h);
}

for (let i: number = 0; i < 5; i++){
    ctx.fillStyle = `rgb(0, 0, ${(255 / 4) * i}`; //backtick kell, altgr+7
    drawRectangles(i + 100, (i * 50) + 20, i * 10, i * 10);
}
// Draw four different size and color rectangles.
// Avoid code duplication.