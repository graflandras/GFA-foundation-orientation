'use strict';

/*Every pokemon has a name and a type. Certain types are effective against others, e.g. water is effective against fire.
You have a Pokemon class with a method called isEffectiveAgainst().
Ash has a few pokemon. Help Ash decide which Pokemon to use against the wild one.*/

import { Pokemon } from './Pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.
// Ash has a few pokemon.

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Balbasaur', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}

// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?

function chosing(){
    for (let i: number = 0; i < pokemonOfAsh.length; i++) {
        if (pokemonOfAsh[i].isEffectiveAgainst(wildPokemon)) {
            return pokemonOfAsh[i].name; //az i-edik pokemon nevét returnölje
        }
    }
}

console.log('I choose you, ');
console.log(chosing());

