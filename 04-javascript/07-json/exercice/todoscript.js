"use strict";
/*
    1. Créer une todo list. à chaque appui sur le bouton ajout,
    créer un nouvel élément dans la liste.
    cet élément doit contenir la valeur de l'input et une croix.
    On en profitera pour vider l'input.
    2. le clique sur un élément de la liste lui ajoutera une classe qui aura pour 
    effet de barrer l'élément.
    3. le clique sur la croix supprimera l'élément concerné.
    4. sauvegarder la liste en localstorage.
    5. afficher la liste sauvegardé au chargement de la page.
    6. éditer la liste lorsque l'on coche ou supprime un élément.
    Bonus : Utiliser le drag and drop pour déplacer nos éléments dans la liste. il faudra penser à sauvegarder les éléments déplacé.
 */
const input = document.querySelector('#title');
const bouton = document.querySelector('#addtask');
const liste = document.querySelector(".todo")
const choses = {};

input.addEventListener("change", function(){});
liste.addEventListener("submit", function(){});

bouton.addEventListener("click", function(){
    if(input.value){
        let tâche = document.createElement('li');
        tâche.textContent = input.value + "X";
        liste.appendChild(tâche);
        input.value = "";
        choses.push(tâche);
    }
});
console.log(input);


function saveList(e) {
    e.preventDefault();
    const list = new FormData(liste);
    list.forEach(function(value, liste){
        choses[liste] = value;
    });
    showChoses(choses);
    const strChoses = JSON.stringify(choses);
    localStorage.setItem("choses", strChoses);
}

    const chosesString = localStorage.getItem(choses);
if(chosesString){
    const choses = JSON.parse(chosesString);
    showChoses(choses);
}

console.log(choses);

function showChoses(l){
    

};
