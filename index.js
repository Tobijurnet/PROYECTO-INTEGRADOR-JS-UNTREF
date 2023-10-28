

import { getProducts } from "./services.js";
import { createCard } from "./functions.js";
import { toggleNavbar } from "./functions.js";
import { cardEvent } from "./functions.js";

const cardContainer = document.getElementById("cardContainer");

getProducts('./products.json')
    .then ( response => response.json())
    .then (data => {createCard(data, cardContainer)
})


fetch('./products.json')
    .then (response => {
        console.log(response)
        if (response.status === 200 && response.ok === true) {
            return response.json()
        }
    })
    .then (data => {
        createCard(data.cardContainer),
        cardEvent();
    })
    .catch(error => console.log(error));

createCard();

toggleNavbar();

cardEvent();








