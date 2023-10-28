// export function createCard(array){

//     array.forEach((item) => {

//         const card = document.createElement("div");
//         card.classList.add("card");
    
//         const title = document.createElement("h2");
//         title.textContent = item.title;
    
//         const price = document.createElement("p");
//         price.textContent = `Price: $${item.price}`;
//         price.classList.add("price");
    
//         const btn = document.createElement("button");
//         btn.innerHTML = "Add to cart";
//         btn.classList.add("btnCart");
    
//         // const description = document.createElement('p');
//         // description.textContent = item.description;
    
//         const img = document.createElement("img");
//         img.setAttribute("src", item.image);
    
//         card.appendChild(title);
//         // card.appendChild(description);
//         card.appendChild(img);
//         card.appendChild(price);
//         card.appendChild(btn);
    
//         cardContainer.appendChild(card);
    
    
//         const addCart = btn.addEventListener('click', function(){
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Added to cart',
//                 showConfirmButton: false,
//                 timer: 1500
//             })
        
//         })
//     });
// }

export function createCard(array){
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

export function toggleNavbar() {
    const navbarNav = document.querySelector(".navbar-nav");
    navbarNav.style.display === "none"
        ? (navbarNav.style.display = "flex")
        : (navbarNav.style.display = "none");
}


export function cardEvent() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card =>{
        cards.addEventListener('click', () => {
            console.log('hiciste click');

    })
    });
}

