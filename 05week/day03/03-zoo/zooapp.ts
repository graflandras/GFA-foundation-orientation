import {Animal} from './animal';
import {Reptile} from './reptile';
import {Mammal} from './mammal';
import {Bird} from './bird';

'use strict';

let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.getBreed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.getBreed());
console.log("A " + bird.getName() + " is breeding by " + bird.getBreed());

console.log('__________________________________________________');
console.log('Other info: ');
console.log(reptile.getInfo());
console.log(mammal.getInfo());
console.log(bird.getInfo());