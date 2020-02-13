'use strict';

/*Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
countUsable() -> sharpie is usable if it has ink in it
removeTrash() -> removes all unusable sharpies*/

class Sharpie {
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

class SharpieSet {
  private sharpieList: Sharpie[] = [];

  add(sharpie: Sharpie) {
    this.sharpieList.push(sharpie);
  }

  getSharpieList() {
    return this.sharpieList;
  }

  countUsable() {
    let usable: number = 0;
    this.sharpieList.forEach(e => {
      if (e.getInkAmount() > 0) {
        usable++;
      }
    });
    return usable;
  }

  removeTrash() {
    this.sharpieList = this.sharpieList.filter(e => e.getInkAmount() > 0);
  }
}

let sharpieSet = new SharpieSet();
console.log(sharpieSet.getSharpieList());

for (let i = 0; i < 100; i++) {
  sharpieSet.add(new Sharpie('black', i));
}
console.log(sharpieSet.getSharpieList());
console.log(sharpieSet.countUsable());


for (let i = 0; i < 10000; i++) {
  sharpieSet.getSharpieList()[Math.floor(Math.random() * 100)].use();
}
console.log(sharpieSet.countUsable());

sharpieSet.removeTrash();

console.log(sharpieSet.getSharpieList());