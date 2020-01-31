'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, 600, 400);

for (let i: number = 0; i < 900; i++){
    let randomGrey = Math.floor(Math.random()*255);
    ctx.fillStyle = `rgb(${randomGrey}, ${randomGrey}, ${randomGrey})`;
    ctx.fillRect(Math.floor(Math.random()*600), Math.floor(Math.random()*400), 2, 2);
}

