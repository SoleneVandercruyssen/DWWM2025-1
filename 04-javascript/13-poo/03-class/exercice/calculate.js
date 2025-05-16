"use strict";

export default class Calculate {
    constructor(){
        const numbers = document.getElementsByClassName('numbers')


let input = document.querySelector("#results")
let a = document.getElementById('plus');
let b = document.getElementById('moins');
let C = document.getElementById('clear');
let m = document.getElementById('multiplier');
let D = document.getElementById('diviser');
// let d = document.getElementById('delete');
let e = document.getElementById('egale');
// let v = document.getElementById('virgule')


console.log(numbers);

    for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
element.addEventListener("click", ()=>{
    console.log("Coucou");
    
input.value += element.textContent;
})
}

// ? Les fonctions

// ! addition

function addition() {
// "split" va séparer les nombres par le symbole "+"
const values = input.value.split("+");

if (values.length === 2) {
    // On prend la 1ère valeur [0] et la 2eme [1] et on vérifie si elles sont bien séparées en 2
    const result = parseFloat(values[0]) + parseFloat(values[1]);
    input.value = result;
}
}

// ! soustraction

function soustraction() {
    const values = input.value.split("-");

    if (values.length === 2) {
        const result = parseFloat(values[0]) - parseFloat(values[1]);
        input.value = result;
    }
}

// ! multiplication

function multiplication() {
    const values = input.value.split("*");

    if (values.length === 2) {
        const result = parseInt(values[0]) * parseInt(values[1]);
        input.value = result;
    }
    
}

// ! division

function division() {
    const values = input.value.split("/");

    if (values.length === 2) {
        if (parseFloat(values[1]) === 0) {
            alert("Division par zéro impossible !");
        }else {
        const result = parseInt(values[0]) / parseInt(values[1]);
        input.value = result;
    }
    }
}


// ? Ecouteurs au "click" pour les opérations

a.addEventListener("click", ()=>{
// Lorsque l'on clique sur le bouton + il s'ajoute à la valeur d'entrée qui se situe dans l'input
input.value += "+";
});

b.addEventListener("click", ()=>{
input.value += "-";
});

m.addEventListener("click", ()=>{
input.value += "*";
});

D.addEventListener("click", ()=>{ 
input.value += "/";
});


/*  Bouton égale (e)
    Si la valeur entrée dans l'input comporte "includes" un click sur la touche "+", "-", "*", "/"
    Alors on active la fonction qui correspond au bouton cliqué
*/

e.addEventListener("click", ()=>{
    
if(input.value.includes("+")){
    addition();}
else if(input.value.includes("-")){
        soustraction();
    }
else if (input.value.includes("*")){
    multiplication();
}
else if (input.value.includes("/")){
    division();
}
}); 

// ! Effacer

C.addEventListener("click", ()=>{
    // Aucune valeur
    input.value = "";
})


}};