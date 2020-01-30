'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.
function drawSquare(x, y, c) {
    ctx.fillStyle = c;
    ctx.fillRect(x, y, 100, 100);
  }
  
  let column = 0;
  for (let i: number = 0; i < 6; i++) {

    if (column % 2 === 0) {

      for (let j: number = 0; j < 4; j++) {

        if (j % 2 === 0) {
          drawSquare(column * 100, j * 100, 'white');
        } else {
          drawSquare(column * 100, j * 100, 'black');
        }
      }
    } else {

      for (let j: number = 0; j < 4; j++) {

        if (j % 2 === 0) {
          drawSquare(column * 100, j * 100, 'black');
        } else {
          drawSquare(column * 100, j * 100, 'white');
        }
      }
    }
    column+=1;
  }