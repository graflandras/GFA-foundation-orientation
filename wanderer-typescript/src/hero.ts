import { Characters } from "./chars";
import { drawFloor } from './index';
import { map1 } from './maps';
import { skeletonArray, moveAllSkeleton } from './skeletons';
import { bossArray, moveBoss } from "./boss";

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


export class Hero extends Characters {


  constructor(name: string, maxHPoint: number, currHPoint: number, defendPoint: number, strikePoint: number, d6: number, coordX: number = 0, coordY: number = 0) {
    super(name, maxHPoint, currHPoint, defendPoint, strikePoint, d6, coordX, coordY);
  }
  draw() {
    const heroDown = document.getElementById('hero-down') as HTMLImageElement;
    ctx.drawImage(heroDown, 0, 0);
    for (let i = 0; i < skeletonArray.length; i++) {
      skeletonArray[i].drawMonster();
    }
    for (let j = 0; j < bossArray.length; j++) {
      bossArray[j].drawBoss();
    }
  }
  heroLeft() {
    const heroLeft = document.getElementById('hero-left') as HTMLImageElement;
    drawFloor(map1);
    moveAllSkeleton();
    moveBoss();
    if (this.coordX - 70 < 0 || map1.fields[this.coordY / 70][this.coordX / 70 - 1] === 1) {
      ctx.drawImage(heroLeft, this.coordX, this.coordY);
      return this.coordX;
    } else {
      ctx.drawImage(heroLeft, this.coordX -= 70, this.coordY);
      return this.coordX;
    }
  }

  heroRight() {
    const heroRight = document.getElementById('hero-right') as HTMLImageElement;
    drawFloor(map1);
    moveAllSkeleton();
    moveBoss();
    if (this.coordX + 70 > 630 || map1.fields[this.coordY / 70][this.coordX / 70 + 1] === 1) {
      ctx.drawImage(heroRight, this.coordX, this.coordY);
      return this.coordX;
    } else {
      ctx.drawImage(heroRight, this.coordX += 70, this.coordY);
      return this.coordX;
    }
  }

  heroDown() {
    const heroDown = document.getElementById('hero-down') as HTMLImageElement;
    drawFloor(map1);
    moveAllSkeleton();
    moveBoss();
    if (this.coordY + 70 > 630 || map1.fields[this.coordY / 70 + 1][this.coordX / 70] === 1) {
      ctx.drawImage(heroDown, this.coordX, this.coordY);
      return this.coordY;
    } else {
      ctx.drawImage(heroDown, this.coordX, this.coordY += 70);
      return this.coordY;
    }
  }

  heroUp() {
    const heroUp = document.getElementById('hero-up') as HTMLImageElement;
    drawFloor(map1);
    moveAllSkeleton();
    moveBoss();
    if (this.coordY - 70 < 0 || map1.fields[this.coordY / 70 - 1][this.coordX / 70] === 1) {
      ctx.drawImage(heroUp, this.coordX, this.coordY);
      return this.coordY;
    } else {
      ctx.drawImage(heroUp, this.coordX, this.coordY -= 70);
      return this.coordY;
    }
  }

  // Function to handle the key press events
  onKeyPress = (event: any) => {
    // Handle arrow keys
    switch (event.keyCode) {
      case 32:            //space
        this.battle();
        break;
      case 37:            //left
        this.heroLeft();
        break;
      case 38:            //up
        this.heroUp();
        break;
      case 39:            //right
        this.heroRight();
        break;
      case 40:            //down
        this.heroDown();
        break;
    }
  }
  getInfo(){
    return `Hero (Level 1) HP: ${this.currHPoint}/${this.maxHPoint} | DP: ${this.defendPoint} | SP: ${this.strikePoint}`;
  }
}

export let hero = new Hero('Hero', 6, 6, 6, 6, 6);
