import {Instrument} from './instrument';
'use strict';

export abstract class StringedInstruments extends Instrument {
    protected numberOfStrings: number;
    protected voice: string;

    constructor(name: string, numberOfStrings: number, voice: string){
        super(name);
        this.numberOfStrings = numberOfStrings;
        this.voice = voice;
    }
    sound(){
        return (`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.voice}`);
    }
    play(){
        return console.log(this.sound());
    }
}
export class ElectricGuitar extends StringedInstruments {
    constructor(numberOfStrings: number = 6, name: string = 'Electric guitar', voice: string = 'Twang'){ //numberofstrings előre, hogy külön is definiálhassuk
        super(name, numberOfStrings, voice);
    }

}

export class BassGuitar extends StringedInstruments {
    constructor(numberOfStrings: number = 4, name: string = 'Bass guitar', voice: string = "Dum-duum-dum"){ //numberofstrings előre, hogy külön is definiálhassuk
        super(name, numberOfStrings, voice);
    }
}

export class Violin extends StringedInstruments {
    constructor(numberOfStrings: number = 4, name: string = 'Violin', voice: string = 'Screech'){ //numberofstrings előre, hogy külön is definiálhassuk
        super(name, numberOfStrings, voice);
    }
}

/*let electricGuitar = new ElectricGuitar(7);
let bassGuitar = new BassGuitar();
let violin = new Violin();
console.log(electricGuitar);
console.log(bassGuitar);
console.log(violin);*/
