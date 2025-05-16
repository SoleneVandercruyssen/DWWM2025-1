<<<<<<< HEAD
/*Exercice 1 :
=======
/*
    Exercice 1 :
>>>>>>> dd0706a124b2689e027146e5eef3429e6621bcbb

    Faire que lors de la selection d'une couleur dans l'input de la div 2
    le texte du bouton change de couleur, 
    et lors de l'appuie sur le bouton, 
    le background de la div change de couleur.
*/
<<<<<<< HEAD
const input2 = document.querySelector('.div2 input')
const btn2 = document.querySelector('.div2 button')
const div2 = document.querySelector('.div2')

input2.addEventListener("change", ()=>{
    btn2.style.color = input2.value
})

btn2.addEventListener("click", ()=>{
    div2.style.backgroundColor = input2.value
})
=======
>>>>>>> dd0706a124b2689e027146e5eef3429e6621bcbb

// function Rrgb(){
//     const r = Math.floor(Math.random()*256)
//     const g = Math.floor(Math.random()*256)
//     const b = Math.floor(Math.random()*256)
//         return `rgb(${r},${g},${b})`
//     }

<<<<<<< HEAD
// const inputCouleur = document.querySelector('.div2 input') 
// const btnCouleur = document.querySelector('.div2 button') 
// const div2 = document.querySelector('.div2') 
// inputCouleur.addEventListener("input",function(){
//     btnCouleur.style.color = inputCouleur.value //`${Rrgb()}`
// })
// btnCouleur.addEventListener("click", function(){
//     div2.style.backgroundColor = inputCouleur.value 
// })
=======
const inputCouleur = document.querySelector('.div2 input') 
const btnCouleur = document.querySelector('.div2 button') 
const div2 = document.querySelector('.div2') 
inputCouleur.addEventListener("input",function(){
    btnCouleur.style.color = inputCouleur.value //`${Rrgb()}`
})
btnCouleur.addEventListener("click", function(){
    div2.style.backgroundColor = inputCouleur.value 
})
>>>>>>> dd0706a124b2689e027146e5eef3429e6621bcbb



/* 
    Exercie 2 :

    Lors du clique sur le bouton de la div 3,
    faire apparaître la modale
    Cette modale doit contenir un élément permettant de la faire disparaître.
*/
const modale = document.querySelector('.modal')
const div3btn = document.querySelector('.div3 button')
const modaleCloseBtn = document.querySelector('.modal button:last-of-type')

div3btn.addEventListener('click', function(){
    modale.classList.remove('hidden')
})

modaleCloseBtn.addEventListener('click',function(){
    modale.classList.add('hidden')
})




<<<<<<< HEAD


const div3 = document.querySelector('.div3')
const btn3 = document.querySelector(".div3 button")
// Pas de point car byClassName sais déjà que l'élément est une classe.
// ClassByName est un objet donc tableau
const modal = document.getElementsByClassName("modal")

btn3.addEventListener("click",()=>{
        modal[0].style.display = "block";
        // modal.classList.remove('hidden)
})

const btnoff = document.querySelector(".modal button:last-of-type")

btnoff.addEventListener("click",()=>{
    modal[0].style.display = "none";
})

=======
>>>>>>> dd0706a124b2689e027146e5eef3429e6621bcbb
/* 
    Exercice 3 :

    Faites que tous nos li dans la nav double de taille lorsque l'on clique dessus.
    puis retournent à leurs tailles d'origine si on clique de nouveau dessus.
*/
<<<<<<< HEAD
// const li = document.getElementsByTagName('li')

// for (let i=0; i<li.length; i++){
//     function liSize (){
//         if (li[i].style.transform !== 'scale(2)'){
//             li[i].style.transform = 'scale(2)'
//         }
        
//         else {
//             li[i].style.transform = 'scale(1)'
//         }
//     }
//     li[i].addEventListener('click', liSize)
// }




 const li = document.querySelectorAll("li")



 li.addEventListener("click", ()=>{
// length pour la taille  
    for(let i = 0; i < li.length; i++) {
    li[i].style.fontSize = i + 2 + "px";
    }
})
=======
const li = document.getElementsByTagName('li')

for (let i=0; i<li.length; i++){
    function liSize (){
        if (li[i].style.transform !== 'scale(2)'){
            li[i].style.transform = 'scale(2)'
        }
        
        else {
            li[i].style.transform = 'scale(1)'
        }
    }
    li[i].addEventListener('click', liSize)
}



>>>>>>> dd0706a124b2689e027146e5eef3429e6621bcbb

/* 
    Exercie 4 :
    
    Utilise les évènements "mouseenter" et "mousemove" pour 
    faire que lorsque l'on passe sur le span du footer, il commence à suivre la souris
    et cela jusqu'à ce que l'on clique, il retournera alors à sa position d'origine.
*/



const spanFooter = document.querySelector('.endOfFile')
// const spanPositionBackup = spanFooter.getBoundingClientRect();
// console.log(spanPositionBackup);



spanFooter.addEventListener('mouseenter', function(){
    spanFooter.style.position = 'fixed'
})

document.addEventListener('mousemove', function(e){
    
    spanFooter.style.left = e.clientX + 'px';
    spanFooter.style.top = e.clientY + 'px';
})

spanFooter.addEventListener('click', function(){
    spanFooter.style.position = 'static'
    
    // spanFooter.style.top = spanPositionBackup.top + "px"
    // spanFooter.style.left = spanPositionBackup.left + "px"
})