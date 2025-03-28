function basketButtonTemplate() {
    return/*html*/`
        <button id=basketButton onclick="overlayOn()"></button>
    `
}

function overlayTemplate(){
    return/*html*/`
        <div class="basket-title"><h2>Warenkorb</h2></div>
        <div id="overlayOrderlist"></div>
        <div class="sum">
            <table>
                <tr>
                    <td>Zwischensumme</td>
                    <td class="text-align-end" id="storedOverlaySum">0</td>
                </tr>
                <tr>
                    <td>Lieferkosten</td>
                    <td class="text-align-end" id="deliveryOverlayCost">6.00 €</td>
                </tr>
                <tr>
                    <td class="bold">Gesamt</td>
                    <td class="text-align-end bold" id="endOverlaySum">0</td>
                </tr>
            </table>
        </div>
        <div class="order-button-overlay"><button id="orderButton" onclick="orderNow()">Bestellen</button>
        <button id="closeOverlay" onclick="overlayOff()">Close</button></div>
    `
}

function menuTemplate(i) {
    return/*html*/`
        <div class="menu-list">
            <h2>${menu[i].title}</h2>
            <p>${menu[i].description}</p>
            <p class="menu-ingredients">${menu[i].ingredients}</p>
            <p class="menu-price">${menu[i].price} €</p>
            <div class="add-product"><img class="add-to-order" onclick="addToBasket(${i})" src="../assets/img/add.png" alt="addButton"></div>
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
                    <td class="text-align-end" id="storedSum">0</td>
                </tr>
                <tr>
                    <td>Lieferkosten</td>
                    <td class="text-align-end" id="deliveryCost">6.00 €</td>
                </tr>
                <tr>
                    <td class="bold">Gesamt</td>
                    <td class="text-align-end bold" id="endSum">0</td>
                </tr>
            </table>
            <div class="order-button"><button id="orderButton" onclick="orderNow()">Bestellen</button></div>
        </div>
    `
}

function ordersTemplate(o) {
    return/*html*/`
    <div class="order-design">
        <div class="title-bin">
            <h2>${basket[o].title}</h2> 
            <img onclick="deleteOrder(${o})" src="../assets/img/trashbin.png" alt="">
        </div>
        <div class="amount-price" id="amountPrice">
            <div class="amount-area">
                <img onclick="deleteAPeace(${o})" src="../assets/img/minus.png" alt="">
                <output id="orderAmount${o}">${basket[o].amount}</output>
                <img onclick="addOneMore(${o})" src="../assets/img/plus.png" alt="">
            </div>
            <output class="baskte-oder-price" id="orderPriceInnerBasket${o}">${basket[o].price}€</output>
        </div>
    </div>
    `
}

function overlayOrdersTemplate(indexOverlayBasket) {
    return/*html*/`
    <div class="order-design">
        <div class="title-bin">
            <h2>${basket[indexOverlayBasket].title}</h2> 
            <img onclick="deleteOverlayOrder(${indexOverlayBasket})" src="../assets/img/trashbin.png" alt="">
        </div>
        <div class="amount-price" id="amountPrice">
            <div class="amount-area">
                <img onclick="deleteAPeace(${indexOverlayBasket})" src="../assets/img/minus.png" alt="">
                <output id="orderAmount${indexOverlayBasket}">${basket[indexOverlayBasket].amount}</output>
                <img onclick="addOneMore(${indexOverlayBasket})" src="../assets/img/plus.png" alt="">
            </div>
            <output class="baskte-oder-price" id="OverlayorderPriceInnerBasket${indexOverlayBasket}">${basket[indexOverlayBasket].price}€</output>
        </div>
    </div>
    `
}

function printEmptyBasket() {
    return/*html*/`
        <p>Der Warenkorb ist leer!</p>
    `
}