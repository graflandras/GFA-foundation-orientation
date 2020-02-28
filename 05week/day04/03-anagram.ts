'use strict';

export class Anagram {
    string1: string;
    string2: string;

    constructor (originalString: string, reversedString: string){
        this.string1 = originalString;
        this.string2 = reversedString;
    }
    reverse(){
        if (this.string1.toLowerCase() == this.string2.toLowerCase().split("").reverse().join("")){
            return true;
        } else {
            return false;
        }
    }
}
let tesssssst = new Anagram('aab', 'baa');

console.log(tesssssst.reverse());
