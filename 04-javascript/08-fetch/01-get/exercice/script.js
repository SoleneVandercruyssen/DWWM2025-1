<<<<<<< HEAD
"use strict";

// ! EXO 1


const url1 = "./exercice/hero.json"
const select = document.querySelector('select')
const options = document.querySelectorAll('option')

const man = document.getElementById('Man')
const uppercut = document.getElementById('Uppercut')
const flame = document.getElementById('Flame')
const Maurice = document.getElementById('Maurice')
const cartes = document.querySelector('.cartes')

fetch(url1).then(hero);

function hero(response) {
    if (response.ok) {
        response.json()
        .then(function(data)
    {
        console.log(hero);
        
        data.members.forEach((member, i)  => {
        cartes.innerHTML += 
            `<members class="heros${i}">
                <h1>${member.name}</h1>
                <li>${member.age}</li>
                <li>${member.secretIdentity}</li>
                <p>${member.powers}</p>
            </members>`
        }); 
        
    })
    .catch(function(error)
            {
                console.error(error);
            });
    }
    else
    {
        console.error(response.statusText);        
    }
}

select.addEventListener("change", ()=>{
    const hero1 = document.querySelector(".heros0")
    const hero2 = document.querySelector(".heros1")
    const hero3 = document.querySelector(".heros2")
    const hero4 = document.querySelector(".heros3")
    cartes.style.display = "block";

    if (man.selected == true) {
        hero1.style.display = "block";
        hero2.style.display = "none";
        hero3.style.display = "none";
        hero4.style.display = "none";
        }

        if (uppercut.selected == true) {
            hero2.style.display = "block";
            hero1.style.display = "none";
            hero3.style.display = "none";
            hero4.style.display = "none";
        } 
        if(flame.selected == true) {
            hero3.style.display = "block";
            hero1.style.display = "none";
            hero2.style.display = "none";
            hero4.style.display = "none";
        }
        if(Maurice.selected == true){
            hero4.style.display = "block";
            hero1.style.display = "none";
            hero2.style.display = "none";
            hero3.style.display = "none";
        }

        // if (man.selected && uppercut.selected && flame.selected && Maurice.selected) {
        //     hero1.style.display = "block"
        //     hero2.style.display = "block"
        //     hero3.style.display = "block"
        //     hero4.style.display = "block"
        // } 
})


// ! EXO 2

const url3 = "./exercice/langues.json"

fetch(url3).then(speak);

function speak(response) {
    if (response.ok) {
        response.json()
        .then(function(data)
    {
        data.descriptions.forEach((description, i)  => {
            section.innerHTML += 
                `<div class="langue${i}">
                    <h1>${description.h1}</h1>
                    <p>${description.p}</p>
                </div>`
            }); 
    })
    .catch(function(error)
            {
                console.error(error);
            });
    }
    else
    {
        console.error(response.statusText);        
    }
}


const selecteur = document.querySelector('#languages')
const section = document.querySelector('section')
const fr = document.querySelector('#Français')
const eng = document.querySelector('#Anglais')
const jap = document.querySelector('#Japonais')
const hin = document.querySelector('#Hindi')

selecteur.addEventListener("change", ()=>{
    const langue1 = document.querySelector(".langue0")
    const langue2 = document.querySelector(".langue1")
    const langue3 = document.querySelector(".langue2")
    const langue4 = document.querySelector(".langue3")


    // langue2.addEventListener("change", choice)
    // langue3.addEventListener("change", choice)
    // langue4.addEventListener("change", choice)
    // selecteur.addEventListener("change", ()=>{


    if (fr.selected == true) {
        langue1.style.display = "block";
        langue2.style.display = "none"
        langue3.style.display = "none"
        langue4.style.display = "none"
}

if (eng.selected == true) {
    langue2.style.display = "block"
    langue1.style.display = "none"
    langue3.style.display = "none"
    langue4.style.display = "none"

}

if
    (jap.selected == true) {
        langue3.style.display = "block"
        langue1.style.display = "none"
        langue2.style.display = "none"
        langue4.style.display = "none"
    
    }
    
if (hin.selected == true) {
    langue4.style.display = "block"
        langue1.style.display = "none"
        langue2.style.display = "none"
        langue3.style.display = "none"

        document.createElement.lang
}
localStorage.setItem( "selecteur" ,speak)
});





// ! EXO 3

const url2 = "https://api.thedogapi.com/v1/images/search"
const img = document.createElement ("img")

fetch(url2).then(api);
function api(response) {
    if (response.ok) {
        response.json()
        .then(function(data)
    {
        console.log(data);
// data car c'est elle qui contient les informations du tableau.

            img.src = data[0].url;
            // img.style.width = data[0].width;
            // img.id = data[0].id;
            // img.style.height = data[0].height;
            // img.alt = "API exo 3"
        
    })
    .catch(function(error)
            {
                console.error(error);
            });
    }
    // else
    // {
    //     console.error(response.statusText);        
    // }
}
document.body.append(img, url2[0]);
// console.log(url2, img);
=======
>>>>>>> dd0706a124b2689e027146e5eef3429e6621bcbb
const urlHero = "./hero.json"
const heroSquad = document.querySelector("h1");
const homeTown = document.getElementById("homeTown")
const formed = document.getElementById("formed");
const secretBase = document.getElementById("secretBase");
const active = document.getElementById("active");
const members = document.getElementById("heroes");
const heroID = document.getElementById("heroID")
const card = document.getElementsByClassName('hero-card')[0]


fetch(urlHero).then(getHero);

function getHero(response) 
{
    if (response.ok) 
    {
        response.json()
            .then(function(data)
        {
            console.log(data);
            heroSquad.textContent = "Squad : " + data.squadName;
            homeTown.textContent = "City : " + data.homeTown;
            formed.textContent = "Since : " + data.formed;
            secretBase.textContent = "Secret base : " + data.secretBase;
            active.textContent = data.active;
            data.members.forEach(carac => {
                members.innerHTML+=
                `<option>${carac.name}</option>`;
                console.log(carac);
                heroID.innerHTML+=
                `<li>age : ${carac.age}</li>
                <li>name : ${carac.secretIdentity}</li>
                <li>super powers : ${carac.powers}</li>`
                const newUl = heroID.cloneNode(true)
                card.append(newUl)
                heroID.innerHTML = "";
                newUl.classList.add(carac.name.replace(" ", "-"));
                console.log(heroID);
                
            });
        })
    } 
}

members.addEventListener("change", function(){
    switchHero(this.value);
})

function switchHero(members) {
    console.log(members);
    document.querySelectorAll(".hero-card ul").forEach(ul=>ul.style.display="");
    // Utiliser un switch pour ajouter la classe appropriée
    switch(members) {

        case "Molecule Man":
            document.querySelector(".Molecule-Man").style.display = "block"
            // localStorage.setItem("theme","rose");
            break;
        case "Madame Uppercut":
            document.querySelector(".Madame-Uppercut").style.display = "block"
            // localStorage.setItem("theme","bleu");
            break;
        case "Eternal Flame":
            document.querySelector(".Eternal-Flame").style.display = "block"
            // localStorage.setItem("theme","tortue");
            break;
        case "Super Maurice":
            document.querySelector(".Super-Maurice").style.display = "block"


        // default:
            // document.body.classList.remove('Molecule-Man', 'Madame-Uppercut', 'Eternal-Flame','Super-Maurice');
            // localStorage.clear()
    }
}
// <!-- ====================== Exercice 2 ====================== -->

fetch('languages.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors du chargement du fichier JSON');
        }
        return response.json();
    })
    .then(languages => {
        afficherLangues(languages); // Affiche la liste des langues
        chargerLangueParDefaut(languages); // Charge la langue par défaut
    })
    .catch(error => console.error('Erreur:', error));


    function afficherLangues(languages) {
        const select = document.getElementById('langues');
        languages.forEach(lang => {
            const option = document.createElement('option');
            option.value = lang.lang;
            option.textContent = lang.lang.toUpperCase(); // Affiche les codes de langue (ex : FR, EN)
            select.appendChild(option);
        });
    
        // Ajoute un événement pour changer la langue
        select.addEventListener('change', () => {
            const selectedLang = select.value;
            const langueChoisie = languages.find(lang => lang.lang === selectedLang);
            changerLangue(langueChoisie);
            localStorage.setItem('selectedLang', selectedLang); // Sauvegarde dans localStorage
        });
    }
    function changerLangue(langue) {
        const titre = document.getElementById('titre');
        const description = document.getElementById('description');
        
        titre.textContent = langue.titre;
        description.textContent = langue.description;
    }
    

function chargerLangueParDefaut(languages)
{
    const savedLanguage = localStorage.getItem("selectedLang");
    if(!savedLanguage)return;
    const select = document.getElementById('langues');
    select.value = savedLanguage;
    const langueChoisie = languages.find(lang => lang.lang === savedLanguage);
    changerLangue(langueChoisie);
}






<<<<<<< HEAD
// fetch(url2)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Erreur réseau');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data); 
//   })
//   .catch(error => {
//     console.error('Il y a eu un problème avec la requête fetch :', error);
//   });
=======
>>>>>>> dd0706a124b2689e027146e5eef3429e6621bcbb




// <!-- ====================== Exercice 3 ====================== -->
fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Affichez les données reçues.
        afficherImagesChiens(data);
    })
    .catch(error => console.error('Erreur:', error));
    function afficherImagesChiens(images) {
        const container = document.getElementById('dog-images') || document.createElement('div');
        container.id = 'dog-images';
        images.forEach(imageData => {
            const img = document.createElement('img');
            img.src = imageData.url;
            img.alt = `Image de chien de l'exercice 3`;
            container.appendChild(img);
        });
        document.body.appendChild(container);
    }
<<<<<<< HEAD
    
=======
    
>>>>>>> dd0706a124b2689e027146e5eef3429e6621bcbb
