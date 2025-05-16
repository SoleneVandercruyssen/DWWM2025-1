"use strict";

const url = "https://data.grandlyon.com/fr/datapusher/ws/timeseries";
const url2 = "./meteo.json";
const url3 = "https://api.weatherapi.com/v1/current.json?q=Villeneuve-d'Ascq"

// const url2 = "/api/explore/v2.1/catalog/datasets/arome-0025-sp1_sp2_toulouse/records?limit=20"
export class createWeather extends HTMLElement {

// data = { 
//         city: 'Paris', 
//         temp: 18, 
//         icon: './meteo.png' 
//         };


data = [];

constructor(){
    super();

    // Création du shadow DOM
    this.shadow = this.attachShadow({mode:"open"});

    // Création du widget météo
    this.createWeatherWidget(this.data);

    // Initialisation du style
    this.initstyle();

}

// Création d'une fonction comprenant les éléments que l'on veut afficher 
    createWeatherWidget(data) {

        const div = document.createElement("div");
        div.classList.add("weather-widget");
        
        const city = document.createElement("h1");
        city.textContent = data.city;

        const temp = document.createElement("p")
        temp.textContent = `${data.temp}°C`;
        
        const icon = document.createElement("img");
        icon.src = data.icon;
        icon.alt = "Weather Icon";

        // affiche les éléments qui sont dans la div
        div.append(city, temp, icon);

        // affiche la div entière
        this.shadow.append(div);
    }

    // Création d'une fonction pour le CSS
    initstyle(){
        
        const style = document.createElement("style")
        // On reprend la class "weather-widget" déclarée plus haut
        style.textContent = /* CSS */
        ` .weather-widget 
        {
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 2px solid red;
        }
        
        .weather-widget h1
        {
            color : red;
            font-size: 2rem;
            display: flex;
            font-weight: bold;
            text-align: center;
        }

        .weather-widget p
        {
        font-size: 1.5rem;
        font-weight: bold;
        }

        .weather-widget img
        {
            border: 2px solid black;
            border-radius: 20%;
        }

        `
        // affiche le style css 
        this.shadow.append(style)
        this.shadowRoot.append(style);
    }

};


customElements.define("weather-widget", createWeather);