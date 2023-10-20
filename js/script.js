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
const arrayUser = [];
const arrayNumW = [];
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

const btn = document.querySelector("button");
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
    console.log(arrayNumW);
},{once:true})
// arrayUser.push(numberOne);
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

