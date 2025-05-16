"use strict";

const btn1 = document.getElementById("number");
const inputbtn1 = document.getElementsByClassName("bouton");
const input2 = document.getElementsByClassName("reset");
const btn2 = document.getElementById("valider");
// Valeur du p 
const carte = document.querySelector("p");
// DIV de la carte
const cartep = document.querySelector(".carte");
const message = document.querySelector("h2");
let tours = 0;
btn2.addEventListener("click", choixnumber);


// inputbtn1.addEventListener("change" ()) => { 
//     btn1.value = inputbtn1.value;
// };


// La valeur de la carte est générée aléatoirement entre 0 et 100
function cartenumber() {
    carte.value = Math.floor(Math.random() * 100);
    console.log(carte.value);
    return (carte.value);
}

cartenumber();

// Nouvelle fonction qui compare la valeur de la carte avec la valeur du bouton
function choixnumber() {
console.log(btn1.value === carte.value && tours < 7,  carte.value, btn1.value);

    if (btn1.value == carte.value && tours < 7) {
        message.textContent = "Bien joué vous avez trouvé le juste prix";
        message.style.backgroundColor = "lightgreen";
        btn2.disabled = true;
        console.log(message);

    } else if (btn1.value < carte.value && tours < 7) {
        message.textContent = "C'est plus grand que" + btn1.value;
        message.style.backgroundColor = "lightred";
        console.log(message);
    }

    else if (btn1.value > carte.value && tours < 7) {
        message.textContent ="C'est plus petit que" + btn1.value;
        message.style.backgroundColor = "lightyellow";
        console.log(message);
    }
        tours++;
        console.log("tours", tours);

    if (tours === 7) {
        cartep.style.transform = "rotateY(360deg)";
        input2[0].style.visibility = "visible";

        message.textContent = "C'est perdu ! Les 7 tours sont écoulés.";
        message.style.color = "white";
        btn2.disabled = true;
        console.log(message, carte, btn2);
        // Arrêt de la fonction
        return;
    }

};
// Lorsque l'on clique sur le bouton recommencer, la carte est générée aléatoirement
// et le message est réinitialisé

// input2[0].addEventListener("click", cartenumber);
// input2[0].addEventListener("click", choixnumber);
// input2[0].addEventListener("click", function(){
//     carte.style.transform = "rotateY(-360deg)";
//     message.textContent = "Veuillez entrer un nombre entre 0 et 100, vous avez 7 tours";

// });
input2[0].addEventListener("click", function(){
    cartenumber()
    choixnumber()
    cartep.style.transform = "rotateY(0deg)";
    message.textContent = "Veuillez entrer un nombre entre 0 et 100, vous avez 7 tours";

});
























//  btn2.addEventListener("click", choixnumber);

// cartenumber();{
//     choixnumber();
//     console.log("carte.value", carte.value);
// };

// carte.addEventListener("click", cartenumber);