"use strict";
<<<<<<< HEAD

/* 
    Le principal ajout de TYPEscript est dans son nom
    C'est le typage, c'est-à-dire que comme dans beaucoup de langage de programmation,  on indiquera le type des variables, paramètres et autres.
*/
let mot : string = "Bonjour";
let chiffre : number = 5;
let bool : boolean = true;
let nu : null = null;

// Cela empêche une variable de changer de type :
// mot = 1;
// Ici je crée un tableau ne contenant que des strings
const arr1: string[] = ["truc", "bidule"];
// Si je veux qu'une variable ou un tableau contienne n'importe quoi, j'utiliserais "any"
let truc : any = "test";
truc = 5;
const arr2 : any[] = ["test", 5, false];

// Pour les objets on pourra indiquer le type de chaque propriété
// le "?" indique que la propriété est optionnelle.
const person: {prenom : string, age?:number} = {prenom: "Maurice"};
// [key:string] indique qu'il peut y avoir des propriété supplémentaires
const person2 : {prenom : string, [key:string]:string} = {prenom:"Charles", nom:"Dupont", loisir: "Bowling", ville: "Loos"};

// On pourra aussi utiliser un nom de classe comme type : 
const today: Date = new Date();

// Ou bien une fonction : 
=======
/* 
    Le principal ajout de TYPEscript est dans son nom
    C'est le typage, c'est à dire que comme dans beaucoup de langage de programmation, on indiquera le type des variables, paramètres et autres
*/
let mot: string = "Bonjour";
let chiffre: number = 5;
let bool: boolean = true;
let nu: null = null;
// Cela empêche une variable de changer de type :
// mot = 1;

// Ici je crée un tableau ne contenant que des strings
const arr1: string[] = ["truc", "bidule"];
// Si je veux qu'une variable ou un tableau contienne n'importe quoi, j'utiliserais "any"
let truc: any = "test";
truc = 5;
const arr2: any[] = ["test", 5, false];

// Pour les objets on pourra indiquer le type de chaque propriété
const person: {prenom: string, age?:number} = {prenom: "Maurice"};
// le "?" indique que la propriété est optionnelle.

// [key:string] indique qu'il peut y avoir des propriété supplémentaires
const person2: {prenom: string, [key:string]:string} = {prenom: "Charles", nom: "Dupont", loisir: "Bowling"};

// On pourra aussi utiliser un nom de classe comme type:
const today: Date = new Date();

// Ou bien une fonction :
>>>>>>> 7c5fad3c4ed59ac826ae124a033e232aca8abe4c
const salut: Function = function(){};

/* 
    On pourra typer les paramètres et les valeurs de retour d'une fonction.

<<<<<<< HEAD
    Le type "void" indique que la fonction ne retourne rien du tout
*/


function clickMe(e: PointerEvent): void
{
    console.log("Meric de cliquer sur", e.target);
    
=======
    le type "void" indique que la fonction ne retourne rien du tout
*/
function clickMe(e: PointerEvent): void
{
    console.log("Merci de cliquer sur ", e.target);    
>>>>>>> 7c5fad3c4ed59ac826ae124a033e232aca8abe4c
}
// Ici une erreur est indiqué car "click" donne un "MouseEvent" et non pas un "PointerEvent"
// document.addEventListener("click", clickMe);
document.addEventListener("pointerdown", clickMe);
// Si on n'est pas sûr, on peut toujours indiquer le type "Event" qui est le parent de tout les évènements.

<<<<<<< HEAD
function tri(tableau: readonly any[]): any[]{
    // le type readonly indique que le paramètre peut être lu, mais pas modifié
    // tableau.toSorted();
    // tableau.sort();
    // Donc je vais créer un nouveau tableau qui lui sera trié.
    return [...tableau].sort();
}

// techniquement, si le type n'est pas indiqué, TS le déclarera quand même:
let a = 5;
// a = "test",

// Mais parfois certaines fonctions ont plusieurs valeurs de retour possible :
//ici btn1 est possiblement null,  je peux éviter cela en ajoutant une condition;
const btn1 = document.querySelector("#compte");
if (btn1) {
    // Mais ici il inqiue que "style" n'existe pas sur "ELEMENT"
    // btn1.style.color = "red";
    // Effectivement, querySelector indiqué retroune un Element et non pas un HTMLEelement
}
// Pour éviter ce genre d'erreur, je pourrai changer la valeur de retour de ma fonction : 
// Ici btn2 n'est pas "null" mais reste un "Element"
const btn2 = document.querySelector("#compte")!;

// Ici btn3 est un "HTMLButtonElement" ou "Null"
const btn3 = document.querySelector<HTMLButtonElement>("#compte");

// Ici btn4 est un "HTMLButtonElement" et n'est plus "null"
const btn4 = <HTMLButtonElement>document.querySelector("#compte");

// même résultat que btn4
const btn5 = document.querySelector("#compte") as HTMLButtonElement;


// Si une vairiable peut contenir plsuieurs types, on utilisera "|"
let y : string|number|boolean = 5;
y = "turc",
=======
function tri(tableau: readonly any[]): any[]
{
    // Le type "readonly" indique que le paramètre peut être lu, mais pas modifié
    // tableau.sort();
    // Donc je vais créer un nouveau tableau qui lui sera trié
    return [...tableau].sort();
}

// techniquement, si le type n'est pas indiqué, TS le déclarera quand même :
let a = 5;
// a = "test";

// Mais parfois certaines fonctions ont plusieurs valeurs de retour possible :
const btn1 = document.querySelector("#compte");
// ici btn1 est possiblement null, je peux éviter cela en ajoutant une condition :
if(btn1)
{
    // Mais ici il indique que "style" n'existe pas sur "Element"
    // btn1.style.color = "red";
    // Effectivement, querySelector indique qu'il retourne un Element et non pas un HTMLElement.
}
// Pour éviter ce genre d'erreur, je pourrais changer la valeur de retour de ma fonction :
// Ici btn2 n'est pas "null" mais reste un "Element"
const btn2 = document.querySelector('#compte')!;

// Ici btn3 est un "HTMLButtonElement" ou "null"
const btn3 = document.querySelector<HTMLButtonElement>('#compte');

// Ici btn4 est un "HTMLButtonElment" et n'est plus "null"
const btn4 = <HTMLButtonElement>document.querySelector('#compte');

// même résultat que btn4
const btn5 = document.querySelector('#compte') as HTMLButtonElement;

// Si une variable peut contenir plusieurs types, on utilisera "|"

let y: string|number|boolean = 5;
y = "truc";
>>>>>>> 7c5fad3c4ed59ac826ae124a033e232aca8abe4c
y = false;