
function init() {
    renderMenu();
    renderBasket();
    CheckOrders()
}

function renderMenu() {
    let basketRendering = document.getElementById(`basketButtonArea`)
    let renderMenuRef = document.getElementById(`menuContent`);
    renderMenuRef.innerHTML ="";

    for (let i = 0; i < menu.length; i++) {
        renderMenuRef.innerHTML += menuTemplate(i); 
    }
    basketRendering.innerHTML = basketButtonTemplate();
}

function renderOrders() {
    let renderOrderRef = document.getElementById(`orderlist`);
    renderOrderRef.innerHTML ="";
    for (let o = 0; o < basket.length; o++) {
        renderOrderRef.innerHTML += ordersTemplate(o); 
    }
    calculateTotal()
}

function renderBasket() {
    let basketLayoutRef = document.getElementById(`checkoutArea`);
    basketLayoutRef.innerHTML = basketLayoutTemplate();
}

function emptyBasket() {
    let basketPrice = document.getElementById(`basketButton`)
    let totalRef = document.getElementById(`endSum`);
    let subtotalRef = document.getElementById(`storedSum`);
    let noItems = document.getElementById(`orderlist`);
    noItems.innerHTML = printEmptyBasket();
    if (basket == "") {
        subtotalRef.innerHTML = 0 + " €";
        totalRef.innerHTML = 0 + " €";
        basketPrice.innerHTML = 0.00 + " €";
    }
}

function CheckOrders() {
    if (basket == "") {
        emptyBasket();
    } else{
        renderOrders();
    }
}

function addToBasket(i) {
    let addorder = menu[i];
    basket.push(addorder);
    CheckOrders();  
}

function deleteOrder(o){
    let despawn = basket.splice(o,1);
    despawn;
    CheckOrders();
}

function addOneMore(o){
    let amountPriceRef = document.getElementById(`orderPriceInnerBasket${o}`);
    let orderPrice = basket[o].price;
    let amountorder = document.getElementById(`orderAmount${o}`);
    let count = document.getElementById(`orderAmount${o}`).value;
    count++;
    amountorder.innerHTML = count+"";
    amountPriceRef.innerHTML = orderPrice * count ;
    calculatePrice(o)
}

function deleteAPeace(o){
    let amountPriceRef = document.getElementById(`orderPriceInnerBasket${o}`);
    let orderPrice = basket[o].price;
    let amountorder = document.getElementById(`orderAmount${o}`);
    let count = document.getElementById(`orderAmount${o}`).value;
    if (count > 1) {
        count--;
        amountorder.innerHTML = count+"";
        amountPriceRef.innerHTML = orderPrice * count ;
        calculatePrice(o)
    } else {
        deleteOrder(o)
    }
}

function calculatePrice(o) {
    let count = parseInt(document.getElementById(`orderAmount${o}`).innerText); 
    let orderPrice = basket[o].price;
    let amountPriceRef = document.getElementById(`orderPriceInnerBasket${o}`);
    let subtotal = orderPrice * count;
    amountPriceRef.innerHTML = subtotal.toFixed(2) + " €";
    calculateTotal();
}

function getSubtotal() {
    let subtotal = 0;
    for (let o = 0; o < basket.length; o++) {
        let count = parseInt(document.getElementById(`orderAmount${o}`).innerText);
        let orderPrice = basket[o].price;
        subtotal += orderPrice * count;
    }
    return subtotal;
}
function calculateTotal() {
    let subtotal = getSubtotal();
    let deliveryCost = 6.00;
    let basketPrice = document.getElementById(`basketButton`)
    let subtotalRef = document.getElementById(`storedSum`);
    if (subtotalRef) {
        subtotalRef.innerHTML = subtotal.toFixed(2) + " €";
        basketPrice.innerHTML = subtotal.toFixed(2) + " €";

    }
    let total = subtotal + deliveryCost;
    let totalRef = document.getElementById(`endSum`);
    if (totalRef) {
        totalRef.innerHTML = total.toFixed(2) + " €";
    }
}


