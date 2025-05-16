"use strict";


const divOpen = document.querySelector('.open');
const shadowpen = divOpen.attachShadow({mode:"open"});
console.log(shadowpen, divOpen.shadowRoot);

const style0 = document.createElement("style");
style0.textContent = /* CSS */
`
:host{display: block;}
img {width: 250px}
`;

shadowpen.append(style0);
console.log(shadowpen);

import {createWeather} from "./Météo2.js";