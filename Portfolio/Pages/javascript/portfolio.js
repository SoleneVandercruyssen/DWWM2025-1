"use strict";

const buttons = document.querySelectorAll(".btn");
const modales = document.querySelectorAll(".modale");
const closeButtons = document.querySelectorAll(".close");


buttons.forEach((button, index) => {
        button.addEventListener("click", (e) => {
                // empêche l'activation du lien "a", et donc le rafraîchissement de la page.
                e.preventDefault ()
                // lorsqu'un des boutons est sélectionné la class active est activée "add".
        modales[index].classList.add("active"); 
});
});


closeButtons.forEach((closeButton, index) => {
        closeButton.addEventListener("click", () => {
                // lorsque le bouton fermer est sélectionné on enlève la class active "remove".
        modales[index].classList.remove("active"); 
        
});});

