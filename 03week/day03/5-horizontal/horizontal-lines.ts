'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawLine(x, y){
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo( x+50, y);
ctx.stroke();
}

for (let i: number = 0; i < 3; i++){
    drawLine(i + 100, (i * 50)+20); //+20: ne a felső határnál kezdje kirajzolni
}


// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

