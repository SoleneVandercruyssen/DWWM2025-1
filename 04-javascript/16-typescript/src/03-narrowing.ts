"use strict";
<<<<<<< HEAD
<<<<<<< HEAD
function birthday(age: number|string) : string
{
    // age++;
    if (typeof age == "number") 
        {
            // Ici age ne peut être qu'un nombre
=======
=======
>>>>>>> dd0706a124b2689e027146e5eef3429e6621bcbb

function birthday(age: number|string): string
{
    // age++;
    // Le narrowing est le fait de resserrer les possibilités
    if(typeof age === "number")
    {
        // Ici age ne peut être qu'un nombre
<<<<<<< HEAD
>>>>>>> 7c5fad3c4ed59ac826ae124a033e232aca8abe4c
=======
>>>>>>> dd0706a124b2689e027146e5eef3429e6621bcbb
        age++;
    }else
    {
        // Ici il ne peut être qu'un string
        age = parseInt(age)+1;
    }
<<<<<<< HEAD
<<<<<<< HEAD
    return age+ "ans";
}

function chaussette(droite: string|boolean, gauche: string|number) : void
{
    if (droite === gauche) {
        // Ici la seule possibilité pour que ce soit égale, c'est que les deux soit de type string
        console.log("Vous avez une paire !", droite, gauche);
        
    }
}

function clavier(e: KeyboardEvent| HTMLElement)
=======
=======
>>>>>>> dd0706a124b2689e027146e5eef3429e6621bcbb

    return age+ " ans";
}

function chaussette(droite: string|boolean, gauche: string|number):void
{
    if(droite === gauche)
    {
        // Ici la seule possibilité pour que ce soit égale, c'est que les deux soit de type string
        console.log("Vous avez une paire !", droite, gauche);        
    }
}

function clavier(e: KeyboardEvent|HTMLElement)
<<<<<<< HEAD
>>>>>>> 7c5fad3c4ed59ac826ae124a033e232aca8abe4c
=======
>>>>>>> dd0706a124b2689e027146e5eef3429e6621bcbb
{
    if(typeof e === "number")
    {
        // le type "never" indique que selon typescript, il est impossible d'arriver ici.
<<<<<<< HEAD
<<<<<<< HEAD
        console.log(e);
        
    }
}

=======
=======
>>>>>>> dd0706a124b2689e027146e5eef3429e6621bcbb
        console.log(e);        
    }
}
/* 
    "a is Date" indique que la valeur de retour sera un boolean,
    et que ce boolean indiquera si le paramètre "a" est un objet "Date" ou non.
*/
<<<<<<< HEAD
>>>>>>> 7c5fad3c4ed59ac826ae124a033e232aca8abe4c
=======
>>>>>>> dd0706a124b2689e027146e5eef3429e6621bcbb
// function isDate(a: any): boolean
function isDate(a: any): a is Date
{
    return a instanceof Date;
}

<<<<<<< HEAD
<<<<<<< HEAD
function check(a : Date|HTMLElement)
=======
function check(a: Date|HTMLElement)
>>>>>>> 7c5fad3c4ed59ac826ae124a033e232aca8abe4c
=======
function check(a: Date|HTMLElement)
>>>>>>> dd0706a124b2689e027146e5eef3429e6621bcbb
{
    if(isDate(a))
    {
        a.getDate();
    }
<<<<<<< HEAD
<<<<<<< HEAD
}


/* 
    "a is Date" indique la valeur de retour sera un boolean, et que ce boolean indiquera si le paramètre "a" est un objet "Date" ou non.
*/
=======
}
>>>>>>> 7c5fad3c4ed59ac826ae124a033e232aca8abe4c
=======
}
>>>>>>> dd0706a124b2689e027146e5eef3429e6621bcbb
