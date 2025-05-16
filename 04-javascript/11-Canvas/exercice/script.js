"use strict";

const canvas = document.querySelector("canvas");
const cva = canvas.getContext("2d");

// 1 - Créer un canva faisant la taille de la fenêtre

const fenêtre = cva.getImageData(0,0,canvas.width, canvas.height);
function resize()
{
const fenêtre = cva.getImageData(0,0,canvas.width, canvas.height);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
cva.putImageData(fenêtre, 0,0);
}
resize();
window.addEventListener("resize", resize);

//  2 - Lors du déplacement de la souris sur le canvas, dessiner à la position de la souris. Une fois cela fonctionnel, ajouter la condition suivante 

let painting = false;

canvas.addEventListener("mousemove", (e) => {
    if(painting == true) {
        cva.lineWidth = 2;
        cva.lineCap = "round";
        cva.strokeStyle = "black";
        // position de la souris
        cva.lineTo(e.clientX , e.clientY);
        // cva.lineTo(value.X, value.Y);
        // Applique les propriétés
        cva.stroke();
        // Sauvegarde
        const fenêtre = cva.getImageData(0,0,canvas.width, canvas.height);
    } else {
        console.log("Vous devez cliquer pour dessiner");
    }
})


// function mousemove() {
//     if(painting == true)
//         console.log("Vous devez cliquer pour dessiner");
//     else{
//         cva.lineWidth = 5;
//         cva.lineCap = "round";
//         cva.strokeStyle = "black";
//         // position de la souris
//         cva.lineTo(e.clientX, e.clientY);
//         // Applique les propriétés
//         cva.stroke();
//     }
// console.log(mousemove);
// }
// mousemove();

// const clientX = 30;
// const clientY = 80;

// canvas.addEventListener("mousedown", () => {
//     if(painting == ) {
//         cva.beginPath();
//         cva.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
//         // cva.moveTo(e.value.clientX, e.value.clientY);
//         cva.stroke();
// }})


// Lors d'un évènement mousedown : Faites passer "painting" à true pour indiquer que votre trait commence


canvas.addEventListener("mousedown", (e) =>{
    painting = true;
    cva.beginPath();
    cva.moveTo(e.clientX, e.clientY);
    cva.stroke();
})

// Lors d'un évènement mouseup: Faites passer "painting" à false pour indiquer que votre trait termine.

canvas.addEventListener("mouseup", (e) => {
    painting = false;
    // cva.closePath();
    cva.stroke();
})

// ! BONUS :



const input = document.querySelector("input");
const red = document.querySelector("#color1");
const yellow = document.querySelector("#color2");
const green = document.querySelector("#color3");
const blue = document.querySelector("#color4");
const pink = document.querySelector("#color5");
const orange = document.querySelector("#color6");
const purple = document.querySelector("#color7");
const brown = document.querySelector("#color8");
const grey = document.querySelector("#color9");
const black = document.querySelector("#color10");
const white = document.querySelector("#color11");


red.addEventListener("click", () => {
    cva.strokeStyle = "red";
    cva.fillStyle = "red"; 
    cva.stroke(); 
});


yellow.addEventListener("click", () => {
    cva.fillStyle = "yellow";
    cva.strokeStyle = "yellow";
    cva.stroke(); 
});

green.addEventListener("click", () => {
    cva.fillStyle = "green";
    cva.strokeStyle = "green";
    cva.stroke(); 
});


blue.addEventListener("click", () => {
    cva.fillStyle = "blue";
    cva.strokeStyle = "blue";
    cva.stroke(); 
});


pink.addEventListener("click", () => {
    cva.fillStyle = "pink";
    cva.strokeStyle = "pink";
    cva.stroke(); 
});


orange.addEventListener("click", () => {
    cva.fillStyle = "orange";
    cva.strokeStyle = "orange";
    cva.stroke(); 
});


purple.addEventListener("click", () => {
    cva.fillStyle = "purple";
    cva.strokeStyle = "purple";
    cva.stroke(); 
});


brown.addEventListener("click", () => {
    cva.fillStyle = "brown";
    cva.strokeStyle = "brown";
    cva.stroke(); 
});


grey.addEventListener("click", () => {
    cva.fillStyle = "grey";
    cva.strokeStyle = "grey";
    cva.stroke(); 
});


black.addEventListener("click", () => {
    cva.fillStyle = "black";
    cva.strokeStyle = "black";
    cva.stroke(); 
});


white.addEventListener("click", () => {
    cva.fillStyle = "white";
    cva.strokeStyle = "white";
    cva.stroke(); 
});


// const retour = document.querySelector("#retour");
// retour.addEventListener("click", () => {
//     cva.putImageData(fenêtre, 0,0);
// })



// Effacer le canvas :


const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    cva.clearRect(0, 0, canvas.width, canvas.height);
})


// Enregistrer le canvas :

const save = document.querySelector("#save");
save.addEventListener("click", () => {
    const dataURL = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = dataURL;
    a.download = "canvas.png";
    a.click();
})