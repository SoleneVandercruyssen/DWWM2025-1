"use strict";

const title = "Super fichier fait pour l'export.";

export default function bonjour() {
    console.log("Bonjour les gens");
    
}
export function salut() {
    console.log( "Salut la population");

}

export function coucou(name) {
    parler(name, "Coucou tous le monde !")
}
function parler(nom, text) {
    console.log(`${nom} : ${text}`);
    
}

console.log("Salutation importé !");



export {title};


// !  EXO

// const image = ["chien-labrador", "chien.jpg", "quelle-est-esperance-vie-chiens-13"];
let i = 0;
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
const dots = document.querySelectorAll(".dots")
const images = document.querySelectorAll(".images")

export function addevent() {
    prev.addEventListener("click",moveslide)
    next.addEventListener("click",moveslide)
    dots.forEach((dot)=>
{dot.addEventListener("click", selectslide)})
}

 export  function moveslide() {
    // "this" = l'élément sur lequel on est, ici on demande si les id sont = à "next", si l'on appuie sur le bouton "next" on demande à ce que l'index s'ajoute "i++", index = 0, 0 correspond à la première image
    if(this.id == "next"){
        i++ 
    } else
    {   // bouton "prev" = effet inverse
        i--
    }


if(i == images.length)
{
    i = 0
}
if(i < 0)
{
    i = images.length -1
    // permet de revenir à la 1ère image lorsqu'on est à la dernière
}
translateslide()
}

export function translateslide() {
    for (let l = 0; l < images.length; l++) {
        const element = images[l];
        /* image 1 = 0 * 100 = 0
        image 2 =  1 * 100 = 100
        image 3 = 2 * 100 = 200 
        */
        element.style.translate = -100 * i + "%"; // le moins 100 est relié au css (les images ont un flex de 100%, la transition se fait donc en négatif car le slider est en "overflow = hidden", de ce fait les images sont hors du cadre.)
    }
}


export  function selectslide() {
    // relier à la class dans l'html, on récupère les données de la class "data-index"
    /* La sélection d'un bouton, i = index, "this" est l'élément sur lequel on est */
    i = this.dataset.index 
    translateslide()
}




// ? Esais

// function showSlide (index) {
    // La slide actuelle
    // currentIndex = index;
    
// l'image de la slide actuelle, qui a été sélectionnée
    // image.src = image[currentIndex]
    // dots.forEach((dot, i) => {
    // dot & i === currentIndex;  
// })
// }

// const slider = slide.create(image)
// document.body.append(slide); 
// slide.default();


// prev.addEventListener("click", changeSlide(-1))
// next.addEventListener("click", changeSlide(1))


// function changeSlide(sens) {
//     numero = numero + sens ;
//     if (numero < 0) 
//         numero = slide.length - 1;
//     if (numero > slide.length - 1)
//         numero = 0;
//     document.getElementsByClassName("container-slider").src = slide[numero];
    
// }
// changeSlide();


















