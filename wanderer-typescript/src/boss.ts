'use strict';
import { Characters } from './chars';
import { map1 } from './maps';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

export class Boss extends Characters {
  constructor(name: string, maxHPoint: number, currHPoint: number, defendPoint: number, strikePoint: number, d6: number, coordX: number = 0, coordY: number = 0) {
    super(name, maxHPoint, currHPoint, defendPoint, strikePoint, d6, coordX, coordY);
  }
  drawBoss() {
    this.coordX = ((Math.floor(Math.random() * 10) * 70));
    this.coordY = ((Math.floor(Math.random() * 10) * 70));
    const boss = document.getElementById('boss') as HTMLImageElement;
    if (map1.fields[this.coordY / 70][this.coordX / 70] === 0 && (this.coordX !== 0 || this.coordY !== 0)) {
      ctx.drawImage(boss, this.coordX, this.coordY);
      map1.fields[this.coordY / 70][this.coordX / 70] = 2;
      return this.coordX, this.coordY;
    } else {
      this.drawBoss();
    }
  }
  moveBoss(): void {
    const boss = document.getElementById('boss') as HTMLImageElement;
    ctx.drawImage(boss, this.coordX, this.coordY);
  }

}

export let bossArray: Boss[] = [];
bossArray.push(new Boss('Boss', 6, 6, 6, 6, 6));

export const moveBoss = () => {
  bossArray.forEach((e, i, array) => {
    array[i].moveBoss();
  })
}

