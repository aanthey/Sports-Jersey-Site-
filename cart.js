if (localStorage.getItem('canAccessCart') !== 'true') {
    window.location.href = 'index.html';
} else {
    localStorage.removeItem('canAccessCart');
}

const TAX_RATE = 0.08;
const SHIPPING_FEE = 15;

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.quantity;

        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <div>
                <h3>${item.title}</h3>
                <p>$${item.price} x ${item.quantity}</p>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax + SHIPPING_FEE;

    document.getElementById('subtotal').textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `Tax: $${tax.toFixed(2)}`;
    document.getElementById('shipping').textContent = `Shipping: $${SHIPPING_FEE.toFixed(2)}`;
    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}

function completeOrder() {
    alert('Checkout - Order complete!');
    cart = [];
    localStorage.removeItem('cart');
    updateCartDisplay();
}

document.getElementById('checkout-button').addEventListener('click', completeOrder);

updateCartDisplay();

