
function menuTemplate(i) {
    return/*html*/`
        <div class="menu-list">
            <h2>${menu[i].title}</h2>
            <p>${menu[i].description}</p>
            <p class="menu-ingredients">${menu[i].ingredients}</p>
            <p class="menu-price">${menu[i].price} €</p>
            <div class="add-product"><img class="add-to-order" onclick="" src="../assets/img/add.png" alt="addButton"></div>
            
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
                    <td class="text-align-end">6,00€</td>
                </tr>
                <tr>
                    <td class="bold">Gesamt</td>
                    <td class="text-align-end bold">PREIS</td>
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