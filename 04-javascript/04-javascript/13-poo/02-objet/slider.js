"use strict";
// Objet
// Sélectionne la div

const cadre = document.querySelector(".appli")

// import { addevent, moveslide, translateslide, selectslide }  from "../../12-modules/script.js";

export const objetslider = {
    // Les boutons "prev" et "next"
    btns: [],
    // Les points du slider
    dots: [],
    // Les images du slider
    images: ["chien-labrador", "chien.jpg", "quelle-est-esperance-vie-chiens-13"],
    /**
     *Créer les éléments à placer dans le slider
     * 
     * 
    */
    create(imgs = false){
      // Création de l'HTML du slider voir l'html du dossier 12-modules
      // Création d'une div  
        const container = document.createElement("div");
      // On donne une class à la div
        container.classList.add("container-slider");
      // Création d'une div  
        const position = document.createElement("div");
        // On donne une class à la div
        position.classList.add("position")
        // Création d'une div  
        const slide = document.createElement("div");
        // On donne une class à la div
        slide.classList.add("slide");

        // Dans le container : partie boutons 


        imgs.forEach((imgSrc, i)=>{
        const div = document.createElement("div");
        const images = document.createElement("img");
        images.src = imgSrc;
        images.alt= `Image ${i + 1}`;
        div.append(images);
        slide.append(div);
        this.images.push(div);

        const dots = document.createElement("div");
        dots.classList.add("dots");
        const dot = document.createElement("span");
        div.classList.add("container-dots");
        dot.dataset.index = i;
        dots.append(dot);
        container.append(div);
        this.dots.push(dot);
        
    })

        //  Partie boutons NEXT et PREV
        container.append(slide);

        const prev = document.createElement("a");
        prev.id = "prev"
        prev.innerHTML = "&#10094;";
        // on ajoute l'élément au tableau
        this.btns.push(prev);

        const next = document.createElement("a");
        next.id = "next" //l'id = html de l'index du dossier module
        next.innerHTML = "&#10095;";
       // on ajoute l'élément au tableau
        this.btns.push(next);

        container.append(next, prev);
        // this.init(style)
        return container;
    },
      // La fonction Start appelle toutes les fonctions de l'import, paramètre = nom que l'on veut, ici = "module"
    start(){
    import("../../12-modules/script.js").then((module)=> { 
    module.addevent();
    module.moveslide();
    module.translateslide();
    // sélectionne tous les "data-index" et pour chaque clique sur un dot, la fonction "selectslide" est lancée (cette fonction est reliée à la fonction "translateslide")
    document.querySelectorAll("[data-index]").forEach((dot)=> dot.addEventListener("click", module.selectslide))
});


    },
      // Fonction "style()" sert à contenir la partie css.
    style(){
        const style = document.createElement("style");
		style.textContent = 
        ` *, ::before, ::after{
        padding: 0;
        box-sizing: border-box;
        margin: 0;
}

body{
    width: 100%;
    height: 100vh;
}

img{
    width: 300px;
    height: 200px;
    border-radius: 20px;
}

.container-slider{
    border: 2px solid red;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80vh;
    justify-content: center;
    align-items: center;
    position: relative;
    
}

/* .position{
    border: 2px solid green;
} */


.slide{
    background-color: aliceblue;
    border: 2px solid blue;
    width: 31%;
    height: 25vh;
    display: flex;
    overflow: hidden;
    margin-left: 35%;
    justify-content: space-between;
    
}

.images{
    flex: 0 0 100%;
    height: 100%;
    transition: .5s ease-in-out;
    /* translate: -100% 0; */
}


.slide img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}


.container-dots{
    width: 100px;
    height: 35px;
    /* border: 2px solid yellow; */
    display: flex;
    margin-top: 1%;
    position: absolute;
    top: 70%;
    z-index: 3;
}

.dots{
    cursor: pointer;
    justify-content: space-evenly;
    align-items: center;
    width: 70px;
    margin-left: 5px;
    height: 30px;
    border-radius: 50px;
    background-color: gray;
}


button{
    transform: translateY(-50%);
    margin-left: 51%;
    margin-top: 8%;
    position: absolute;
    z-index: 3;
    left: 10%;
    right: 10%;
    justify-content: space-between;
    width: 40px;;
    height: 50px;
    /* background-color: lightblue; */
    border-radius: 20px;
}

#prev{
    margin-left: 26%;
} `
}}
cadre.addEventListener("click",() => {
  cadre.append(objetslider.create([
  "chien-labrador", 
  "chien.jpg", 
  "quelle-est-esperance-vie-chiens-13"
])); 
objetslider.start()

});