let cart = [];

document.getElementById('contact-btn').addEventListener('click', function() {
    const contactForm = document.getElementById('contact');
    contactForm.style.display = (contactForm.style.display === 'none') ? 'block' : 'none';
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

function checkout() {
    alert('Proceeding to checkout...');
    // Implement checkout logic here
}
