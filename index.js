
const URL_base = 'https://fakestoreapi.com/products'

const cardContainer = document.getElementById("cardContainer");


function createCard(array){
    array.forEach(item => {
        cardContainer.innerHTML += 
        `
            <div class="card">
                <h2>${item.title}</h2>
                <img src="${item.image}" alt="" />
                <p class="price">Price: ${item.price}$</p>
                <button class="btnCart" >Add to cart</button>
            </div>
        `
        
    });
}

function cardEvent() {
    const cards = document.querySelectorAll('.card')
    console.log(cards);
    cards.forEach(card => {
        card.addEventListener('click', (event) =>{
            let title = event.target.children[0].textContent
            // console.log(title);
            window.location.href = `./HTML/prod.html`
        })
    })
}

fetch(`${URL_base}`, 
{method: 'GET'})
    .then(response => {
        // console.log(response)
        if (response.status === 200 && response.ok === true) {
            return response.json()
        }
    })
    .then(data => {
        createCard(data)
        cardEvent()
    })
    .catch(err => console.log(err));







cardEvent()