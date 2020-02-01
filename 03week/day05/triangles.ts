'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawLines1 (x, y, h, q) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(h, q);
    ctx.stroke();
}

let x: number = 0; //startpoint's moveTo's X coordinate
let y: number = 334; //startpoint's moveTo's Y coordinate
let h: number = 357; //startpoint's lineTo's X coordinate
let q: number = 334; //startpoint's lineTo's Y coordinate

for (let i: number = 0; i < 21; i++) {
    drawLines1(x,y,h,q);
    x += 8.5; //half of the triangles' width added to moveTo X
    y -= 15.87; //heigth of the triangles extracted from moveTo Y
    h -= 8.5; //half of the triangles' width extracted from lineTo X
    q -= 15.87; //heigth of the triangles extracted from lineTo Y
}

x = 0;
y = 334;
h = 178.5;
q = 0.8;

for (let j: number = 0; j < 21; j++) {
    drawLines1(x,y,h,q);
    x += 17;
    h += 8.5;
    q += 15.87;
}

x = 178.5;
y = 0.8;
h = 357;
q = 334;

for (let k: number = 21; k > 0; k--) {
    drawLines1(x,y,h,q);
    x -= 8.5;
    y += 15.87;
    h -= 17;
}