"use strict";


// Je selectionne ma checkbox
const dark = document.querySelector('#darkTheme')


.addEventListener("input", changeTheme);

function changeTheme() {
    // ? Solution 1 : Changer la classe du body
    document.body.classList.toggle('dark', dark.checked);
    if (dark.checked) {
        
/* 
    localStorage et sessionStorage fonctionnent exactement de la même façon. Même fonctionnalités et propriétés.
    La seule différence est le temps de stockage.
        localStorage garde l'information jusqu'à ce qu'on décide de la supprimer.
        sessionStorage garde l'information pour la session donc jusqu'à ce qu'on ferme le navigateur.

        setItem() permet de sauvegarder une information
        seul des strings peuvent être sauvegarder.
            Le premier paramètre est un nom qui servira à retrouver l'information.
            Le second est l'information à stocker.

*/
localStorage.setItem('theme', "dark");

    }

else{
    // removeItem permet de supprimer un élément du storage, il prendra en paramètre, la clef de l'élément à supprimer.
    localStorage.removeItem('theme');
}


    // ? Solution 2 : changer les variables CSS
    if (dark.checked) {
// console.log(document.documentElement);

        // document.documentElement.style.setProperty('--fond', "#333") ;
        // document.documentElement.style.setProperty('--text', "antiquewhite") ;

}else{
    // document.documentElement.style.setProperty('--fond', "") ;
    // document.documentElement.style.setProperty('--text', "") ;
}};

// getItem permet de récupérer un élément dans le storage. Il prend en paramètre la clef de l'élément à récupérer.
// (si il ne trouve rien, il retourne "null")
dark.checked = localStorage.getItem('theme') === "dark";
// ma fonction changeTheme change le thème selon si la case est cochée ou non.
changeTheme();

// sessionStorage.setItem('salutation', "Bonjour tous le monde !");
// localeStorage.setItem('salutation', "Bonjour tous le monde !");

// Cela supprime toute les informations stockées dans le storage.
sessionStorage.clear();