'use strict';
//Create a PostIt a class that has
//a backgroundColor
//a text on it
//a textColor
//Create a few example post-it objects:
//an orange with blue text: "Idea 1"
//a pink with black text: "Awesome"
//a yellow with green text: "Superb!"

class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;

    constructor (backgroundColor: string, text: string, textColor: string) {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
}
let postIt1 = new PostIt('black', 'This is the first postit.', 'yellow');
let postIt2 = new PostIt('blue', 'This is the second postit.', 'green');
let postIt3 = new PostIt('white', 'This is the third postit.', 'black');

console.log(postIt1, postIt2, postIt3);