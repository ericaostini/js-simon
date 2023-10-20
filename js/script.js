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
        playgame.classList.remove("d-none");
    }
}

const numGenerate = 5;
const arrayRandom = [];
const arrayUser = [];
const arrayNumW = [];
const min = 1;
const max = 100;
const numberBox = document.getElementById("box");
const playgame = document.getElementById("playgame");

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

const btn = document.querySelector("button");
const points = document.getElementById("points");
const numberOne = document.getElementById("one");
const numberTwo = document.getElementById("two");
const numberThree = document.getElementById("three");
const numberFour = document.getElementById("four");
const numberFive = document.getElementById("five");

btn.addEventListener("click", function(){
    arrayUser.push(parseInt(numberOne.value),parseInt(numberTwo.value), parseInt(numberThree.value),parseInt(numberFour.value),parseInt(numberFive.value));
    console.log(arrayUser);
        // if(!isNaN(numberOne, numberTwo, numberThree, numberFour, numberFive)){
        //     console.log("aggiungi numero");
        // } else{
        // }
    for (let i = 0; i < arrayRandom.length; i++){
        if (arrayRandom.includes(arrayUser[i])){
            arrayNumW.push(arrayUser[i]);
        }
    }
    console.log(arrayNumW)
    console.log(arrayNumW.length);
    const punteggio = arrayNumW.length;
    switch (punteggio){
        case 0:
            points.innerHTML = `Che memoria, complimenti`;
            break
        case 1:
            points.innerHTML = `Solo 1, puoi fare di meglio`;
            break
        case 2:
            points.innerHTML = `${punteggio} ci sei quasi dai`;
            break
        case 3:
            points.innerHTML = `${punteggio} ci sei quasi dai`;
            break
        case 4:
            points.innerHTML = `${punteggio} ci sei quasi dai`;
            break
        case 5:
            points.innerHTML = `Tu si che sei intelligente`;
            break
    }

},{once:true})
// arrayUser.push(numberOne);
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

