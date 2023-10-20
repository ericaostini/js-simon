"use strict";

const timer = document.getElementById("timer");
let seconds = 30;
const timerSec = setInterval(countSec, 1000);
function countSec(){
    if(seconds > 0 ){
        seconds -= 1;
        //console.log(seconds);
        timer.innerHTML = `<div> ${seconds} </div>`;
    } else{
        timer.innerHTML = "FINE";
        console.log("fine");
        numberBox.classList.add("d-none");
    }
}

const numGenerate = 5;
const arrayRandom = [];
const min = 1;
const max = 100;
const numberBox = document.getElementById("box");

while (arrayRandom.length < numGenerate){
    let randomNum = getRndInteger(min, max)
    console.log(randomNum);
    if (!arrayRandom.includes(randomNum)){
        arrayRandom.push(randomNum);
    }
}

const arrayRandomLen = arrayRandom.length;
let textNum = '<ul class = "d-flex">'
//console.log(arrayRandomLen);
for (let n = 0; n < arrayRandomLen; n++){
    textNum += '<li class = "m-auto" >' + arrayRandom[n] + '</li>';
}
textNum += '</ul>'
numberBox.innerHTML = textNum;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

