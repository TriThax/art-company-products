let cart = [];

document.getElementById('contact-btn').addEventListener('click', function() {
    const contactForm = document.getElementById('contact');
    contactForm.style.display = (contactForm.style.display === 'none') ? 'block' : 'none';
});

document.getElementById('cart-toggle').addEventListener('click', function() {
    const cartSection = document.getElementById('cart');
    cartSection.style.display = (cartSection.style.display === 'none') ? 'block' : 'none';
    updateCart();
});

function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <p>${item.productName} - $${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    document.getElementById('cart-count').textContent = cart.length;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function showOrderForm() {
    const orderFormSection = document.getElementById('order-form-section');
    orderFormSection.style.display = 'block';

    // Populate the order details in the order form
    const orderDetails = cart.map(item => `${item.productName} - $${item.price}`).join("\n");
    document.querySelector('[name="order-details"]').value = orderDetails;

    // Hide the cart section
    document.getElementById('cart').style.display = 'none';
}

function closeCart() {
    const cartSection = document.getElementById('cart');
    cartSection.style.display = 'none';
}
