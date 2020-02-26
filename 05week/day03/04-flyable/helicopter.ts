import {Flyable} from './flyable';
import {Vehicle} from './vehicle';
'use strict';

export class Helicopter extends Vehicle implements Flyable{
    land(){
        console.log(`${this.constructor.name} landed.`);
    };
    fly(){
        console.log(`${this.constructor.name} is flying.`);
    };
    takeOff(){
        console.log(`${this.constructor.name} taken off`);
    };
}

let ironBird = new Helicopter('Iron Bird', 'Mercedes', 'Gasoline');

ironBird.takeOff();