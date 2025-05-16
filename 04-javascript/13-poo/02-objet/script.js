"use strict";
import { Person } from "./person.js";


Person.age = "chaussette";
// ! ne fonctionne pas comme une fonction:
// Person.setAge("chaussette")
Person.setAge = "chaussette";
Person.setNom = "foNtaIne";
Person.setPrenom = "pIeRrE";
// console.log(Person);
console.log(Person.getFullName);
// ! Et non pas :
// console.log(Person.getFullName());
Person.setAge = 54;
Person.salutation();
<<<<<<< HEAD
Person.anniversaire();


// ? POO via des objets

import { objet } from "./objet.js";

objet.setFirst = "socCer";
objet.setSecond = "BOXE";
objet.Price = 45;
console.log(objet.FullHobby);
objet.presentation();

// ? 0 Fonctionnalité optionnelle




import {objetslider} from "./slider.js";


=======
Person.anniversaire();
>>>>>>> dd0706a124b2689e027146e5eef3429e6621bcbb
