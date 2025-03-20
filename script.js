
function init() {
    renderMenu();
}

function renderMenu() {
    let renderMenuRef = document.getElementById(`menuContent`);
    renderMenuRef.innerHTML ="";

    for (let i = 0; i < menu.length; i++) {
        renderMenuRef.innerHTML += menuTemplate(i); 
    }
}
