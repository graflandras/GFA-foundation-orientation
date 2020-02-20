'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
ctx.strokeStyle = "darkgreen";
ctx.fillStyle = "green";


function draw(startX, startY, lengthOfBranch, angle, branchWidth) {
    ctx.beginPath();
    ctx.save();
    
    ctx.lineWidth = branchWidth;
    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI/180);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -lengthOfBranch);
    ctx.stroke();
    ctx.shadowBlur = 15;
    ctx.shadowColor = "rgba(0,0,0,0.8)";
    
    if(lengthOfBranch < 10) {
    ctx.beginPath();
    ctx.arc(0, -lengthOfBranch, 10, 0, Math.PI/2);
    ctx.fill();
    ctx.restore();
    return;
    }
    
    draw(0, -lengthOfBranch, lengthOfBranch*0.8, angle+10, branchWidth*0.8);
    draw(0, -lengthOfBranch, lengthOfBranch*0.8, angle-10, branchWidth*0.8);

    ctx.restore();
  }

draw(400,800,120,0,20);