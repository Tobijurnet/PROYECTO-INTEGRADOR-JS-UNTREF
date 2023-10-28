fetch('./products.json')
    .then(response => {
        console.log(response)
        if (response.status === 200 && response.ok === true) {
            return response.json()
        }
    })
    .then(data => {
        createCard(data.cardContainer),
        cardEvent();
    })
    .catch(err => console.log(err));