"use strict";
/* 
    Exercice 1 :
    Changer la taille de chaque paragraphe du main.
    Chaque paragraphe doit être plus gros que le précédent.
    (Exemple: 16px, 18px, 20px, etc.)
*/

const p = document.querySelectorAll('main p');
console.dir(p);

for(let i = 0; i < 5; i++) {
    p[i].style.fontSize = i + 1.5 + "rem";
}
// p.forEach((p, index) => {
//     p.style.fontSize = `${16 + index * 2}px`;
// });

/* 
    Exercice 2 :
    Faite apparaître aside via une transition depuis la gauche. 
*/
const aside = document.querySelector('aside');
aside.style.left= 50 + "vw";
aside.style.top= 50 +"%";
aside.style.transition = 2 + "s";
console.log(aside);

// const aside = document.querySelector('aside');
// aside.style.transition = 'transform 1s ease';
// aside.style.transform = 'translate(150vw, 50vh)'; // Afficher l'aside

/* 
    Exercice 3 :
    Faite que la couleur de fond de la modale soit aléatoire à chaque rechargement de la page.
*/
// const div = document.querySelector('div')
// const couleur = ["#FF5733", "#F15652", "#3357FF"];
// const couleurAleatoire = couleur[Math.floor(Math.random()* colors.length)];

// function colorchange(couleur) {
//     console.log(couleur + couleurAleatoire);
    
// }
