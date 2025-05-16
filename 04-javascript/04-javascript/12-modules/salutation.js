"use strict";

/* 
    Ecmascript permet l'export/import de fonctions et objets (entre autres choses).
    Cela va permettre de diviser notre projet en plusieurs fichiers afin de s'y retrouver plus facilement.
    Pour utiliser l'import/l'export notre fichier chargé dans le html doit inclure l'attribut suivant :
     *type = "module"

? Export :
Dans les fichiers non chargés par l'html, on ira placer le mot clef "export" ou "export default" devant es fonctions que l'on souhaite utiliser ailleurs.
On peut exporter autant d'éléments que l'on souhaite, mais un seul par fichiers peut avoir "export default".

? Import :
Par défaut, l'import ne peut se trouver qu'au niveau le plus haut du code. C'est-à-dire, par une fonction, un eocndition, une boucle...

Pour importer un élément, on utilisera le mot clef "import" suivi d'entre accolade les éléments à importer séparés de virgules,
puis le mot clef "from" suivi du chemin vers le fichier.

import {salut, coucou} from "./salutations.js";
    La première fois qu'on importe un fichier, si il contient du code, il sera exécuté.


import b, {salut, coucou} from "./script.js";
    Pour importer l'élément par défaut, il faut placer un nom (n'importe lequel) avec les accolades.

import b, {salut, coucou as c} from "./script.js";
    Si besoin, je peux renommer un élément importé avec le mot clef "as" suivi du nouveau nom.

import as * sa from "./script.js";
    "* as unNom" permet d'importer tous les exports du fichier rassemblé dans un objet.
*/
import * as sa from "./script.js";
// b();
// salut();
// coucou("Maurice");
// coucou ("Maurice");
// c("Maurice");

console.log(sa);
sa.coucou("Maurice");
sa.salut();
sa.default();


/* 
    Si notre import doit dépendre d'une action utilisateur, une condition ou autre.
    On utilisera pas le mot clef "import" mais la fonction "import()"

    Celle-ci prendra en paramètre le chemin vers le fichier.
    et retournera une "promesse" qui une fois réalisé rendra un objet contenant tous les exports.

*/
hello();
async function hello()
{
    const salut = await import("./script.js");
    salut.default();
    salut.coucou("Pierre");
    salut.salut();
}


// ! EXO
sa.addevent()






