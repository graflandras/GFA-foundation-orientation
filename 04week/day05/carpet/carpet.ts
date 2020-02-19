'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
let gradient = ctx.createLinearGradient(0, 0, 0, 1200);

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, 1200, 1200);

function drawSierpinsky(x: number, y: number, size: number, repeat: number) {
  ctx.fillStyle = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}`;
  ctx.fillRect(x + size / 3, y + size / 3, size / 3, size / 3);

  if (repeat > 1) {
    drawSierpinsky(x, y, size / 3, repeat - 1);
    drawSierpinsky(x + size / 3, y, size / 3, repeat - 1);
    drawSierpinsky(x + size * 2 / 3, y, size / 3, repeat - 1);
    drawSierpinsky(x, y + size / 3, size / 3, repeat - 1);
    drawSierpinsky(x + size * 2 / 3, y + size / 3, size / 3, repeat - 1);
    drawSierpinsky(x, y + size * 2 / 3, size / 3, repeat - 1);
    drawSierpinsky(x + size / 3, y + size * 2 / 3, size / 3, repeat - 1);
    drawSierpinsky(x + size * 2 / 3, y + size * 2 / 3, size / 3, repeat - 1);
  } else {
    return;
  }
}

drawSierpinsky(0, 0, 1200, 5);