'use strict';

/*Create Sharpie class
We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
When creating one, we need to specify the color and the width
Every sharpie is created with a default 100 as inkAmount
We can use() the sharpie objects
which decreases inkAmount*/

class Sharpie {
    color: string;
    width: number;
    inkAmount: number = 100;

    constructor(color, width) {
        this.color = color;
        this.width = width;
    }

    use () {
        this.inkAmount --;
        console.log('Remaining ink amount: ' + this.inkAmount);
    }
}

let sharpie1 = new Sharpie('blue', 100);
let sharpie2 = new Sharpie('black', 50);
let sharpie3 = new Sharpie('yellow', 30);

sharpie1.use();
sharpie1.use();
sharpie2.use();