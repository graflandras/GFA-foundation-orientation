'use strict';

/*Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value*/

class Counter {
    baseNum: number;

    constructor (integer: number = 0) {
        this.baseNum = integer;
    }

    add(adder: number = 1) { //ha adunk értéket a függvénynek, akkor azzal, ha nem, akkor eggyel növeli
        this.baseNum += adder;
    }

    get() {
        console.log('Current value: ' + this.baseNum);
    }
    
    reset() {
        this.baseNum = 0;
    }
}

let counter1 = new Counter(10);
let counter2 = new Counter();

counter1.add();
counter1.get();

counter2.add(6);
counter2.get();