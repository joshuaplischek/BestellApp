
function menuTemplate(i) {
    return/*html*/`
        <div class="menu-list">
            <h2>${menu[i].title}</h2>
            <p>${menu[i].description}</p>
            <p class="menu-ingredients">${menu[i].ingredients}</p>
            <p class="menu-price">${menu[i].price} €</p>
        </div>
    `
}

function baskettemplate(i) {
    return/*html*/`
        <div><h2>Warenkorb</h2></div>
        <div></div>
        <div></div>
    `
}