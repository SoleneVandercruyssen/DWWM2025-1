import Dev from "./Dev.js";
import H from "./Human.js";
<<<<<<< HEAD
// import Canvas from "./exercice/canva.js";
import Calculate from "./exercice/calculate.js";
=======
>>>>>>> dd0706a124b2689e027146e5eef3429e6621bcbb

const monHumain = new H("Maurice", "Dupont", 54);
const monHumain2 = new H("Pierre", "Fontaine", 78);
const monDev = new Dev("Jean", "Bernard", 34, ["html", "css", "javascript"]);

// Dev.description()
console.log(monDev);
monDev.salutation();

console.log(monHumain, monHumain.vivant, H.categorie, H.vivant);

// monHumain.description();
H.description();
monHumain.salutation();
monHumain2.anniversaire();

const maDate = new Date();
// now() est une méthode static, elle existe sur la classe Date
console.log(Date.now());
// Mais pas sur l'objet instancié par Date.
// console.log(maDate.now());

<<<<<<< HEAD
// Appelle l'objet Canva
// new Canvas ()
// Appelle l'objet Calculate
new Calculate()
=======
>>>>>>> dd0706a124b2689e027146e5eef3429e6621bcbb
