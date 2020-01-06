'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let remainingHours: number = 24 - currentHours - 1;
let remainingMinutes: number = 60 - currentMinutes;
let remainingSeconds: number = 60 - currentSeconds;

//console.log("Remaining hours: " + remainingHours + ", Remaining minutes: " + remainingMinutes + ", remaining seconds: " + remainingSeconds);

console.log("Remaining seconds: " + ((remainingHours * 3600) + (remainingMinutes * 60) + remainingSeconds));