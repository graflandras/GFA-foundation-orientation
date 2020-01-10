'use strict';
export{}
let name: string = "Greenfox";

function greet(noName: string = "Anonymus") { //noName: alapértéket ad a fgvnek, ha a fgv meghívásakor () van, akkor ez érvényesül
    console.log("Greetings, dear "+ noName);
  }
  greet(name);

