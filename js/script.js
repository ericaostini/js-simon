"use strict";

const numGenerate = 5;
const arrayRandom = [];
const min = 1;
const max = 100;

while (arrayRandom.length < numGenerate){
    let randomNum = getRndInteger(min, max)
    console.log(randomNum);
    if (!arrayRandom.includes(randomNum)){
        arrayRandom.push(randomNum);
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}