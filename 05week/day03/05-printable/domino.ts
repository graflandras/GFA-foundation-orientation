import {Printable} from "./printable";

class Domino implements Printable {
    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }
    printAllFields(){
        console.log(this.values[0]);
        console.log(this.values[1]);
    }
}
export {Domino};


