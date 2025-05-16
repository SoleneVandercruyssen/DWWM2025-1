<<<<<<< HEAD
/* Typescript est une surcouche à Javascript.
Il permet d'ajouter des fonctionnalités que l'on trouve habituellemnt dans les langages de développement plus classique.

Dont la principale qui se trouve dans le nom, de typage

? installation :
    *npm install typescript --save-dev
? transpiler un fichier :
*npx tsc "./src/01-install.ts" = nom du fichier
? transpiler vers un autre dossier :
    *npx tsc "./src/01-install.ts" --outDir "dist" 


    Pour éviter de retaper cela à chaque fois, on peut créer un fichier "ts.config.js" à la racine du projet et y entrer :

    {
    "compilerOptions": {
        "outDir": "dist"
    },
    "files" : [
        "src/01-install.ts"
    ]
}


Ensuite on aura plus qu'à taper :
    * npx tsc
Ou si on veut que le terminale surveille tout changement: 
    * npx tsc --watch
=======
/* 
    Typescript est une surcouche à Javascript.
    Il permet d'ajouter des fonctionnalités que l'on trouve habituellement dans les langages de développement plus classique.

    Dont la principale, qui se trouve dans le nom, le typage.

    ? Installation :
        * npm install typescript --save-dev

    ? transpiler un fichier :
        * npx tsc pathToFile.ts
    ? transpiler vers un autre dossier :
        * npx tsc pathToFile.ts --outDir pathToFolder


    Pour éviter de retaper cela à chaque fois, on peut créer un fichier "tsconfig.js" à la racine du projet et y entrer :
        {
            "compilerOptions": {
                "outDir": "dist"
            },
            "files": [
                "src/01-install.ts"
            ]
        }

    Ensuite on aura plus qu'à taper :
        * npx tsc
    Ou si on veut que le terminal surveille tout changement:
        * npx tsc --watch
>>>>>>> 7c5fad3c4ed59ac826ae124a033e232aca8abe4c
*/

const btn = document.querySelector("#compte");
let i = 0;
btn?.addEventListener("click", ()=>{
    i++;
<<<<<<< HEAD
=======
    // btn.textContent = i;
>>>>>>> 7c5fad3c4ed59ac826ae124a033e232aca8abe4c
    btn.textContent = i.toString();
})

/* 
    Par défaut typescript transpile vers ES3 qui est assez vieux.
<<<<<<< HEAD
    On peut modifer cela en ajoutant à notre config : 
        * target : ESNext (ou autre version de ES)
    On peut profiter d'être ici pour ajouter des options supplémentaires comme :
        *noEmitOnError : true
    Ou : 
=======
    On peut modifier cela en ajoutant à notre tsconfig :
        * target: ESNext (ou autre version de ES)
    On peut profiter d'être ici pour ajouter des options supplémentaires comme :
        * noEmitOnError: true
    Ou :
>>>>>>> 7c5fad3c4ed59ac826ae124a033e232aca8abe4c
        * strict : true
*/