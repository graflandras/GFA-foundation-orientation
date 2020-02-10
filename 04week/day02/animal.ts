'use strict';

/*Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one*/

class Animal {
    hunger: number = 50;
    thirst: number = 50;

    eat () {
        this.hunger --;
        console.log('Hunger level: ' + this.hunger + '\n Thirst level: '+this.thirst);
    }

    drink () {
        this.thirst --; 
        console.log('Hunger level: '+this.hunger+ '\n Thirst level: '+this.thirst);        
    }

    play () {
        this.hunger --;
        this.thirst --;
        console.log('Hunger level: '+this.hunger+ '\n Thirst level: '+this.thirst);
    }
}
let lion = new Animal();
let parrot = new Animal();
let fish = new Animal();

lion.eat();
lion.play();