"use strict";

export default class Canvas {
ball= []
    constructor (){

const canva = document.querySelector("canvas");
const context = canva.getContext("2d");

// Dimensions du canva
const dimensions = context.getImageData(0,0, canva.width, canva.height);

function resize() {
    canva.width = window.innerWidth;
    canva.height = window.innerHeight
    context.putImageData(dimensions, 0, 0)
}
resize();
window.addEventListener("resize", resize);

// Génération d'un nombre aléatoire de 1 à 1000
function RandomInt(min = 4, max = 18) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RandomV(min = 1, max = 5) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RandomP(min = 1, max = 1000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RandomR(min = 4, max = 70) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Je sauvegarde mon dessin avant de lancer l'animation.
let snapshot = context.getImageData(0,0, canva.width, canva.height)

window.addEventListener("click", (e)=>{
    // Random couleur, px, position, r
    const r = RandomR()
    let color = "#"+(Math.floor(Math.random() * 0xFFFFFF)).toString (16);
    let x = RandomP(), y = RandomP(), vitesseX = RandomV(), vitesseY = RandomV();
    let pxl = RandomInt();
    context.putImageData(snapshot, 0, 0)

    // On met toute les propriétés dans le tableau
    this.ball.push({color:color, pxl:pxl, x:x, y:y, vitesseX:vitesseX, vitesseY:vitesseY, r:r })
    const ball = this.ball

    function animate(){ 
     // Effacer le canva
    context.clearRect(0,0, canva.width, canva.height);

    // Faire une boucle pour éviter que les anciennes ne s'effacent
    for (let balls = 0; balls < ball.length; balls++) {
        const element = ball[balls];
        const {x, y, r, color, pxl, vitesseX, vitesseY }= element
        console.log(x+r, canva.width);
        
        if(x + r > canva.width || x - r < 0){
        element.vitesseX = -vitesseX;
        console.log(element.vitesseX);
        
    }
    if(y + r > canva.height || y - r < 0)
    {
        element.vitesseY = -vitesseY;
    }
    element.x += element.vitesseX;
    element.y += element.vitesseY;

    // Style
    context.beginPath();
    context.arc(element.x, element.y, r, 0, 2*Math.PI);
    context.lineWidth = pxl;
    context.fillStyle = color;
    context.strokeStyle = color;
    context.fill();
    context.stroke();
    console.log(color);
    }

    requestAnimationFrame(animate);
}
animate();

    })
}
};
