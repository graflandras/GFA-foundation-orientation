'use strict';
import {Maps, map1, map2} from './maps';
import {hero} from './hero';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
document.body.addEventListener('keydown', hero.onKeyPress);

// Drawing a floor tile
export function drawFloor(mapPattern: Maps) {
    for (let i: number = 0; i < canvas.width; i+=70) {
        for (let j: number = 0; j < canvas.height; j+=70) {
            const floor = document.getElementById('floor') as HTMLImageElement;
            const wall = document.getElementById('wall') as HTMLImageElement;
            if (mapPattern.fields[j/70][i/70] === 0 || mapPattern.fields[j/70][i/70] === 2) {
                ctx.drawImage(floor, 0 + i, 0 + j);
            } else {
                ctx.drawImage(wall, 0 + i, 0 + j);
            }
        }
    }
}

drawFloor(map1);
hero.draw();

const hudcanvas = document.querySelector('.hud-canvas') as HTMLCanvasElement;
const ctx2 = hudcanvas.getContext('2d');
ctx2.font = "35px Arial";
ctx2.fillText(`${hero.getInfo()}`,20,30);
console.log(map1);





