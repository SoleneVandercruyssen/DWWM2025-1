"use strict";

// ! La POO via des objets


// Mon objet 
const objet = 
{
    // Les données que je met dans mon objet
    Hobby : {
        first: "soccer",
        second: "boxe"

    },
    Price : 70,

// Setter

    set setPrice (p) {
        this.Price = parseInt(p)
    }, 

    set setFirst (f){
        this.Hobby.first = f.toUpperCase();
    },

    set setSecond (s){
        this.Hobby.second = s.toLowerCase();
    },


// Getter

    get FullHobby ()
    {
        return `${this.Hobby.first} ${this.Hobby.second}`;
    },

    presentation()
    {
        console.log(`Mes Hobby sont le ${this.Hobby.first} et la ${this.Hobby.second}`);
        
    }
};
export {objet};

