let item = new URLSearchParams(window.location.search).get('cardContainer')
console.log(item);

const URL_base = 'https://fakestoreapi.com/products'

fetch(`${URL_base}`)
    .then(response => response.json())
    .then(data => console.log(data))