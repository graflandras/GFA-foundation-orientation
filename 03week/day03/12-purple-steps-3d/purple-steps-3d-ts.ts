'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

function drawPurpleSquare(x: number, y: number, size: number) {
    ctx.fillStyle = `rgb(148, 0, 211)`;
    ctx.fillRect(x, y, size, size);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x, y, size, size);
  }
  
  let startPosition: number[] = [15, 15]

  for (let i: number = 1; i <= 6; i++) {
    drawPurpleSquare(startPosition[0], startPosition[1], i * 15);
    startPosition[0] += i * 15;
    startPosition[1] += i * 15;
  }