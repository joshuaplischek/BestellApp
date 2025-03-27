function init() {
    renderMenu();
    renderBasket();
    renderOverlay();
    CheckOrders();
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
    let renderOverlayOrderRef = document.getElementById(`overlayOrderlist`);
    let renderOrderRef = document.getElementById(`orderlist`);
    renderOrderRef.innerHTML ="";
    renderOverlayOrderRef.innerHTML = "";
    for (let o = 0; o < basket.length; o++) {
        renderOrderRef.innerHTML += ordersTemplate(o);
        checkAmount(o)
    }

    for (let indexOverlayBasket = 0; indexOverlayBasket < basket.length; indexOverlayBasket++) {
        renderOverlayOrderRef.innerHTML += overlayOrdersTemplate(indexOverlayBasket);
        checkOverlayAmount(indexOverlayBasket);
    }
    calculateTotal()
}

function renderBasket() {
    let basketLayoutRef = document.getElementById(`checkoutArea`);
    basketLayoutRef.innerHTML = basketLayoutTemplate();
}

function checkAmount(o) {
    let orderPrice = document.getElementById(`orderPriceInnerBasket${o}`)
    if (basket[o].amount > 1){
        let basketAmount = basket[o].amount;
        let basketPrice = basket[o].price;
        orderPrice.innerHTML = basketAmount * basketPrice + " €";
    }
}

function checkOverlayAmount(indexOverlayBasket) {
    let orderOverlayPrice = document.getElementById(`OverlayorderPriceInnerBasket${indexOverlayBasket}`)
    if (basket[indexOverlayBasket].amount > 1) {
        let basketAmount = basket[indexOverlayBasket].amount;
        let basketPrice = basket[indexOverlayBasket].price;
        orderOverlayPrice.innerHTML = basketAmount * basketPrice + " €";
    }
}

function emptyBasket() {
    let basketPrice = document.getElementById(`basketButton`)
    let totalRef = document.getElementById(`endSum`);
    let subtotalRef = document.getElementById(`storedSum`);
    let noItems = document.getElementById(`orderlist`);
    let noOverlyItems = document.getElementById(`overlayOrderlist`);
    noItems.innerHTML = printEmptyBasket();
    noOverlyItems.innerHTML = printEmptyBasket();
    if (basket == "") {
        subtotalRef.innerHTML = 0 + " €";
        totalRef.innerHTML = 0 + " €";
        basketPrice.innerHTML = 0.00 + " €";
    }
    emptyOverlayBasket()
}

function emptyOverlayBasket() {
    let totalRef = document.getElementById(`endOverlaySum`);
    let subtotalRef = document.getElementById(`storedOverlaySum`);
    if (basket.length === 0) {
        subtotalRef.innerHTML = 0 + " €";
        totalRef.innerHTML = 0 + " €";
    }
}

function CheckOrders() {
    if (basket.length === 0) {
        emptyBasket();
    } else{
        renderOrders();
    }
}

function getIndexMenu(idCheck) {
    let indexNumber = basket.findIndex(obj => obj.id ==idCheck);
    return indexNumber;
}

function addToBasket(i) {
    let addorder = menu[i];
    let getIndexCage = getIndexMenu(i);
    if (getIndexCage == -1){
        basket.push(addorder);
    } else{
        basket[getIndexCage].amount++;
    }
    CheckOrders();
}

function deleteOrder(o){
    let despawn = basket.splice(o,1);
    despawn;
    CheckOrders();
    resetAmount();
}

function deleteOverlayOrder(indexOverlayBasket){
    let despawn = basket.splice(indexOverlayBasket,1);
    despawn;
    CheckOrders();
    resetAmount();
}

function addOneMore(o){
    basket[o].amount++;
    checkAmount(o);
    CheckOrders();
    calculatePrice(o);
}

function deleteAPeace(o){
    if (basket[o].amount > 1) {
        basket[o].amount--;
        checkAmount(o);
        CheckOrders();
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

function updateSubtotal(subtotal) {
    let basketPrice = document.getElementById(`basketButton`);
    let subtotalRef = document.getElementById(`storedSum`);
    let subtotalOverlayRef = document.getElementById(`storedOverlaySum`);
    
    if (subtotalRef) {
        subtotalRef.innerHTML = subtotal.toFixed(2) + " €";
        basketPrice.innerHTML = subtotal.toFixed(2) + " €";
    }
    if (subtotalOverlayRef) {
        subtotalOverlayRef.innerHTML = subtotal.toFixed(2) + " €";
    }
}

function updateDeliveryCost(deliveryCost) {
    let deliveryRef = document.getElementById(`deliveryCost`);
    let deliveryOverlayRef = document.getElementById(`deliveryOverlayCost`);
    
    if (deliveryRef) {
        deliveryRef.innerHTML = deliveryCost.toFixed(2) + " €";
    }
    if (deliveryOverlayRef) {
        deliveryOverlayRef.innerHTML = deliveryCost.toFixed(2) + " €";
    }
}

function updateTotal(total) {
    let totalRef = document.getElementById(`endSum`);
    let totalOverlayRef = document.getElementById(`endOverlaySum`);
    
    if (totalRef) {
        totalRef.innerHTML = total.toFixed(2) + " €";
    }
    if (totalOverlayRef) {
        totalOverlayRef.innerHTML = total.toFixed(2) + " €";
    }
}

function calculateTotal() {
    let subtotal = getSubtotal();
    let deliveryCost = 6.00;
    let total = subtotal + deliveryCost;
    
    updateSubtotal(subtotal);
    updateDeliveryCost(deliveryCost);
    updateTotal(total);
}

function overlayOn() {
    document.getElementById("overlay").style.display = "block";
    CheckOrders()
  }

function renderOverlay() {
    let overlayBasket = document.getElementById(`overlay`);
    overlayBasket.innerHTML = overlayTemplate();
}

  function overlayOff() {
    document.getElementById("overlay").style.display = "none";
  }

function orderNow() {
    if(basket.length == 0){
        alert("Der Warenkorb ist leer! Lege bitte zuerst ein Produkt in den Warenkorb!")
    } else{
        basket.length = 0;
        document.getElementById("overlayOrderComplete").style.display = "flex";  
        CheckOrders();
        resetAmount();
    }   
}

function closeOrderOverlay() {
    document.getElementById("overlayOrderComplete").style.display = "none";
}

function resetAmount() {
    for (let indexAmount = 0; indexAmount < menu.length; indexAmount++) {
        menu[indexAmount].amount = 1;
    }
}

