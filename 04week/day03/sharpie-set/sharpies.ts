'use strict';

/*Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
countUsable() -> sharpie is usable if it has ink in it
removeTrash() -> removes all unusable sharpies*/

export class Sharpie {
    color: string;
    width: number;
    inkAmount: number;
  
    constructor(color: string, width: number) {
      this.color = color;
      this.width = width;
      this.inkAmount = 100;
    }
  
    use(): void {
      if (this.inkAmount !== 0) {
        this.inkAmount--;
      }
    }
  
    getInkAmount(): number {
      return this.inkAmount;
    }
  }