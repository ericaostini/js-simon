"use strict";

const numGenerate = 5;
const arrayRandom = [];
const min = 1;
const max = 100;

let randomNum = getRndInteger(min, max)
console.log(randomNum);
// while (arrayRandom.length < numGenerate){
// }

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}