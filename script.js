
function init() {
    renderMenu();
    renderBasket();
    CheckOrders()
}

function renderMenu() {
    let renderMenuRef = document.getElementById(`menuContent`);
    renderMenuRef.innerHTML ="";

    for (let i = 0; i < menu.length; i++) {
        renderMenuRef.innerHTML += menuTemplate(i); 
    }
}

function renderOrders() {
    let renderOrderRef = document.getElementById(`orderlist`);
    renderOrderRef.innerHTML ="";

    for (let o = 0; o < basket.length; o++) {
        renderOrderRef.innerHTML += ordersTemplate(o);
    }
}

function renderBasket() {
    let basketLayoutRef = document.getElementById(`checkoutArea`);
    basketLayoutRef.innerHTML = basketLayoutTemplate();
}

function emptyBasket() {
    let noItems = document.getElementById(`orderlist`);
    noItems.innerHTML = printEmptyBasket();
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


