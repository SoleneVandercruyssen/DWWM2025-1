"use strict";

/* 
Permet de récupérer des éléments HTML via le nom de leur balise.

*/
const lis = document.getElementsByTagName("li");

/* On obtient un objet "HTMLCollection" contenant toutes les balises demandées.
    Ici j'ai cherché dans tout mon document, mais il est possible de préciser une recherche dans un élément précis.
    Imaginons que j'ai une variable, "footer" qui contient mon footer, je peux écrire 
    footer.getElementsByTagName("li"); */

console.log(lis);
/* 
 !Attention, je ne peux pas modifier tous les li d'un seul coup,
 Il me faudra préciser lequel je modifie :
*/
lis.textContent = "Coucou";
// Ceci fonctionnera :
lis[0].textContent = "Coucou";

/* 
Permet de récupérer des éléments HTML via leurs nom de classe
Pour le reste, il fonctionne comme getElementByTagName
*/

const ps = document.getElementsByClassName("step");
const p1 = document.getElementsByClassName("marche1");
console.log(ps, p1);

/* 
Selectionne un élément HTML via son ID.
Un id devant être unique, ici pas de HTMLCollection, mais directement l'élément HTML
*/
const h1 = document.getElementById("mainTitle");
console.log(h1);

/* 

Prend en paramètre, les mêmes sélecteurs qu'en CSS.
Il selectionnera le premier élément correspondant à ce sélecteur.
*/
const p2 = document.querySelector(".marche2");
// const p2 = document.querySelector("main > p:nth-of-type(2)");
// const p2 = document.querySelector("body main p.marche2.step");

/* 
    Fonctionne comme le querySelector
    Mais ne s'arrêtera pas au premire résultat,
    Il rangera la totalité des balises correspondante dans un tableau nommé "NodeList"

*/

const lis2 = document.querySelectorAll("footer li");
console.log(lis2);

/* 
    On peut préciser la recherche à un élément plutôt qu'au document en entier.

*/
const header = document.querySelector('header');
const h = header.querySelector('h1');





//  ? Sélecteurs Bonus :

// Selectionne l'élément HTML suivant (ici le main)
console.log(header.nextElementSibling);

// Selectionne ce qui suis (ici du text consistant à un saut à la ligne et de l'indentation)
console.log(header.nextSibling);

// On trouvera aussi "previousElementSibling"
console.log(header.previousElementSibling);

// Retourne un objet HTMLCollection contenant tous les enfants
console.log(header.children);

// Retourne le parent de l'élément.
console.log(lis[2].parentElement);

// Retourne le parent le plus proche qui correspond au sélecteur CSS
console.log(lis[2].closest("footer"));


//  ? Déplacer ou Supprimer.
// Si je demande d'ajouter un élément déjà présent, il sera déplacé :
// header.append(lis[2]);
//  Retirer l'élément indiqué :
// lis2[2].remove();
/* 

Si l'élément est présent directement en variable ou dans une nodelist, il sera toujours présent.
Mais dans un HTMLCollection, il sera retiré.
*/
console.log(lis2[2], lis);
// Il existe une autre façon de retirer :
// header.removeChild(h);
// Dans le header, je retire mon h1

// ! Exercices 


// ! exo 1
// Selectionner la div et l'aside
const div = document.querySelector('div')
const aside = document.querySelector('aside');
// On place la div dans le body
document.body.append(div)
console.log( aside, div);


// ! exo 2
// Selectionne tous les li
const li = document.querySelectorAll("li");

/* 
Nous n'avons pas besoin de "if" */
// if(document.body)
// {
/* .append sert à ajouter or ici on en a pas besoin car les "li" sont déjà présent*/
// document.body.append(li) 
// }


/*   
i = 0 lorsqu'il commence la boucle
i < 3 On demande si i est plus petit que 3 à chaque itération
i++ On demande d'ajouter 1 à chaque itération
*/

for (let i = 0; i < 3;i++)
{
    li[i].textContent = "Coucou";
    // le [i] remplace le [0], [1] et [2]
    // li[0].textContent = "Coucou"
    // li[1].textContent = "Coucou";
    // li[2].textContent = "Coucou";

// break;
}
console.log(li);

// ! exo 3

const paras2 = document.querySelectorAll(".step:nth-of-child")