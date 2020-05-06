'use strict';
import {map1} from './maps';
import { skeletonArray } from './skeletons';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

export abstract class Characters {
  protected name: string;
  protected maxHPoint: number;
  protected currHPoint: number;
  protected defendPoint: number;
  protected strikePoint: number;
  protected d6: number;
  protected coordX: number = 0;
  protected coordY: number = 0;

  constructor(name: string, maxHPoint: number, currHPoint: number, defendPoint: number, strikePoint: number, d6: number, coordX: number, coordY: number) {
    this.name = name;
    this.maxHPoint = maxHPoint;
    this.currHPoint = currHPoint;
    this.defendPoint = defendPoint;
    this.strikePoint = strikePoint;
    this.d6 = d6;
    this.coordX = coordX;
    this.coordY = coordY;
  }
  draw() {}
}
