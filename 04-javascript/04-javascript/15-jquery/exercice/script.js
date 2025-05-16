"use strict";

const slider = document.querySelector("#slider");
let sliderUl = document.querySelectorAll("slider ul");
let slides = document.querySelectorAll("li");
let checkbox = document.querySelector("#checkbox");
const prev = document.querySelector(".control_prev");
const next = document.querySelector(".control_next");


let slideCount = document.querySelectorAll('slider ul li');
let slideWidth = document.querySelectorAll('slider ul li');
let slideHeight = document.querySelectorAll('slider ul li');
let sliderUlWidth = slideCount * slideWidth;


// Mise en place d'une durée d'intervalle entre les slides

let idInterval; 
document.addEventListener("content", ()=>{
    if (this[0].checked) {
        idInterval = setInterval(moveRight, 1500)
    }else {
        clearInterval(idInterval)
    }
});

// ? Fonction 

function moveRight() {
    sliderUl.style.transition = "left 0.2s";
    sliderUl.style.right = `-${slideWidth}px`;

    sliderUl.addEventListener("transitionend", function End(){
    sliderUl.style.transition = "none"
    sliderUl.style.left = 0;
    }


)}


function moveLeft() {
    sliderUl.style.transition = "left 0.2s";
    sliderUl.style.right = `${slideWidth}px`;

    sliderUl.addEventListener("transitionend", function End(){
        sliderUl.style.transition = "none"
        sliderUl.style.left = 0;
        })
}


// Evènement au click, la checkbox va déclencher la fonction setIntervalle

checkbox.addEventListener("change", ()=>{
if (this.checked) {
    idInterval = setInterval(moveRight, 1500);
}else{
    clearInterval(idInterval)
}
})

// Les boutons Avant et Après déclenchent leur propre fonction lors de leur click
prev.addEventListener("click", moveLeft);
next.addEventListener("click", moveRight);

slider.style.width = `${slideWidth}px`;
slider.style.height = `${slideHeight}px`;
sliderUl.style.width = `${sliderUlWidth}px`;
sliderUl.style.marginLeft = `-${sliderUlWidth}px`;
