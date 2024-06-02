let cart = [];

function updateQuantity(inputId, value) {
    let input = document.getElementById(inputId);
    let newValue = parseInt(input.value) + value;
    if (newValue >= 0) {
        input.value = newValue;
    }
}

function addToCart(itemName, quantityId, price) {
    let quantity = parseInt(document.getElementById(quantityId).value);
    if (quantity > 0) {
        cart.push({ itemName, quantity, price });
        alert(itemName + " added to cart with quantity " + quantity);
    }
}

function checkout() {
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = "/Endterm/Website-Endterm-Examination-main/Receipt.html";
}
