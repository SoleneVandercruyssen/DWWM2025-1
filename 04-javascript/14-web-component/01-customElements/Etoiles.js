"use strict";

// ! EXO 1

export class Etoiles extends HTMLElement
{

    constructor(){
        const stars = document.querySelector("rating-stars");
        const btns = document.querySelector("button")
        super();
        stars = this; 
        this.value = parseInt(this.getAttribute("value")) || 0; //valeur initiale
        
        btns.addEventListener("click", ()=>{
                btns.style.backgroundColor = "red"
        },
            
    )}
    }

//     rating()
//     {
//     if(this.checked){

//         // 5 étoiles max
//         this.style.color = "red";
//     }
// }



// Elément autonome 
customElements.define("rating-starss", Etoiles);