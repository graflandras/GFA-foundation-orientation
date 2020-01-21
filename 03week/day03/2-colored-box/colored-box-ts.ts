'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(10, 150);
ctx.stroke();

ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(200, 10);
ctx.stroke();

ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.moveTo(200, 10);
ctx.lineTo(200, 150);
ctx.stroke();

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(200, 150);
ctx.lineTo(10, 150);
ctx.stroke();

// draw a box that has different colored lines on each edge.
