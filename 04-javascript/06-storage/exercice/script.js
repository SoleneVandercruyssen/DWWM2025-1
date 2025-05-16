"use strict";
<<<<<<< HEAD
/* 
    1. Ajouter un menu de selection qui permettra de choisir entre 3 thèmes.
    2. Appliquer le thème selectionné grâce à JS (pas besoin de thème compliqué)
    3. Faire en sorte que le choix de l'utilisateur soit toujours appliqué lorsqu'il change de page. (que ce soit visible dans le menu de selection autant que dans les couleurs du site.)
    4. Bonus: Faire un bouton qui change aléatoirement les couleurs du site et les sauvegarder.
*/

const menu1 = document.querySelector('#menu1');
const menu2 = document.querySelector('#menu2'); 
const menu3 = document.querySelector('#menu3'); 
const menu4 = document.querySelector('#menu4');  


menu1.addEventListener("click", Theme);
menu2.addEventListener("click", Theme);
menu3.addEventListener("click", Theme);
menu4.addEventListener("click", Random);


function Random() {
//      let color = (Math.floor(Math.random() * 0xFFFFFF)).toString (16);
//      document.body.style.backgroundColor = "#" + color;
console.log("random");

}



function Theme() {
// if(menu1.checked){
// body.style.backgroundColor = "";

// if(menu2.checked)
//     body.style.backgroundColor = "";

// else if(menu3.checked)
//     body.style.backgroundColor = "" ;
// }
    console.log(document.documentElement);

}


menu1.addEventListener("click", function() {
    document.documentElement.style.setProperty('--fond', "red") ;
    // body.style.backgroundColor = "";
    localStorage.setItem('theme', "red");
    
});
menu2.addEventListener("click", function() {
    document.documentElement.style.setProperty('--fond', "yellow") ;
    // body.style.backgroundColor = "";
    localStorage.setItem('theme', "yellow");
});
menu3.addEventListener("click", function() {
    document.documentElement.style.setProperty('--fond', "green") ;
    // body.style.backgroundColor = "";
    localStorage.setItem('theme', "green");
});
menu4.addEventListener("click", function() {
    // générer un nombre aléatoire (entre 0.0000... et 0.9999...) et le multiplier par 0xFFFFFF = plus gros nombre possible pour une couleur hexadécimale.
    // 16 pour convertir en base 16 (hexadécimal)
    let color = (Math.floor(Math.random() * 0xFFFFFF)).toString (16);
    document.body.style.backgroundColor = "#" + color;
    // document.body.classList.remove("red", "yellow", "green");
});

// getItem récupère l'élément dans le storage
menu1.checked = localStorage.getItem('theme') === "red";
menu2.checked = localStorage.getItem('theme') === "yellow"; 
menu3.checked= localStorage.getItem('theme') === "green";
menu4.checked= localStorage.getItem('theme') === "random";

Theme();

// Fin exo
/* ------EX 1------- */

const optiontheme = document.querySelector('#themes');


=======
/* ------EX 1------- */

const optiontheme = document.querySelector('#themes');
>>>>>>> dd0706a124b2689e027146e5eef3429e6621bcbb
// this is how you declare a value attribute ('[value="rose"]')
const rose = document.querySelector('[value="rose"]') 
const bleu = document.querySelector('[value="bleu"]')
const tortue = document.querySelector('[value="tortue"]')
const randColor = document.querySelector(".randColor")
// random
randColor.addEventListener("click", setRandColor)

optiontheme.addEventListener("change", settheme);

function settheme()
{
    // document.body.style.backgroundColor = "";
    document.body.classList.remove("rose", "bleu", "tortue") // this is to avoid the formation of value list in console. and then it will only take one value at a time.
    if(rose.selected){
        document.body.classList.toggle("rose", rose.selected);
        localStorage.setItem("themes", "rose");
    }

    else if(bleu.selected){
        document.body.classList.toggle("bleu", bleu.selected);
        localStorage.setItem("themes", "bleu");
    }
    else if(tortue.selected){
        document.body.classList.toggle("tortue", tortue.selected);
        localStorage.setItem("themes", "tortue");
    }
    // random
    // else if(optiontheme.value == random){

    // }
}
rose.selected = localStorage.getItem("themes") === "rose";
bleu.selected = localStorage.getItem("themes") === "bleu";
tortue.selected = localStorage.getItem("themes") === "tortue";
document.body.style.backgroundColor = localStorage.getItem("themes")
settheme();
console.log("themes");
// random
// console.log(randColor);

function setRandColor() 
{
    var r= Math.floor(Math.random()*255) // 255 is the total value of rgb each color of red, green , blue.
    var g= Math.floor(Math.random()*255)
    var b= Math.floor(Math.random()*255)

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    // document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";

    localStorage.setItem("themes", `rgb(${r},${g},${b})`);
}
