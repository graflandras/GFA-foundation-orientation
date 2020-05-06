'use strict';
import { Characters } from './chars';
import { map1 } from './maps';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

export class Skeletons extends Characters {
  constructor(name: string, maxHPoint: number, currHPoint: number, defendPoint: number, strikePoint: number, d6: number, coordX: number = 0, coordY: number = 0) {
    super(name, maxHPoint, currHPoint, defendPoint, strikePoint, d6, coordX, coordY);
  }
  drawMonster() {
    this.coordX = ((Math.floor(Math.random() * 10) * 70));
    this.coordY = ((Math.floor(Math.random() * 10) * 70));
    const skeleton = document.getElementById('skeleton') as HTMLImageElement;
    if (map1.fields[this.coordY / 70][this.coordX / 70] === 0 && (this.coordX !== 0 || this.coordY !== 0)) {
      ctx.drawImage(skeleton, this.coordX, this.coordY);
      map1.fields[this.coordY / 70][this.coordX / 70] = 2;
      return this.coordX, this.coordY;
    } else {
      this.drawMonster();
    }
  }
  moveOneMonster(): void {
    const skeleton = document.getElementById('skeleton') as HTMLImageElement;
    ctx.drawImage(skeleton, this.coordX, this.coordY);
  }
  getSkeletonPosition(){
    return this.coordX, this.coordY;
  }
}
export let skeletonArray: Skeletons[] = [];
for (let skeletonNO: number = 0; skeletonNO < 3; skeletonNO++) {
  skeletonArray.push(new Skeletons('Skeleton', 6, 6, 6, 6, 6));
}
export const moveAllSkeleton = () => {
  skeletonArray.forEach((e, i, array) => {
    array[i].moveOneMonster();
  })
}


