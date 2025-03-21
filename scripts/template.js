
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

function basketLayoutTemplate(){
    return/*html*/`
        <div class="basket-title"><h2>Warenkorb</h2></div>
        <div id="orderlist"></div>
        <div class="sum">
            <table>
                <tr>
                    <td>Zwischensumme</td>
                    <td class="text-align-end">PREIS</td>
                </tr>
                <tr>
                    <td>Lieferkosten</td>
                    <td class="text-align-end">PREIS</td>
                </tr>
                <tr>
                    <td>Gesamt</td>
                    <td class="text-align-end">PREIS</td>
                </tr>
            </table>
        </div>
    `
}

function ordersTemplate(o) {
    return/*html*/`
        <p>${basket[o]}</p>  
    `
}

function printEmptyBasket() {
    return/*html*/`
        <p>Der Warenkorb ist leer!</p>
    `
}