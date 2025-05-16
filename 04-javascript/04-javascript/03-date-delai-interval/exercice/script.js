"use strict"

let horloge = document.querySelector('.horloge')
let heure = document.querySelector('.heure')
let minute = document.querySelector('.minute')
let seconde = document.querySelector('.seconde')

const date = new Date();




function clock() {
// let degrée = 360 + "deg";
let hours = date.getHours() * 30;
let seconds = date.getSeconds() * 6;
let minutes = date.getMinutes() * 6;

    document.querySelector('.heure').style.transform = `rotate(${heure}deg)`;

    document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;

    document.querySelector('.seconde').style.transform = `rotate(${seconde}deg)`;
}

setInterval(clock, 1000);

// Intervention toute les secondes
