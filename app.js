// JavaScript to manage the cart and order form

let cart = []; // Array to store cart items

// Function to add product to cart
function addToCart(productName, price) {
    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(item => item.product === productName);
    
    if (existingProductIndex !== -1) {
        // If it exists, increase the quantity
        cart[existingProductIndex].quantity += 1;
    } else {
        // Otherwise, add the new product to the cart
        cart.push({ product: productName, price: price, quantity: 1 });
    }

    // Update the cart UI
    updateCartUI();
}

// Function to update the cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');

    // Update the cart item count in the header
    cartCount.textContent = cart.length;

    // Display cart items
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.product} x ${item.quantity} - $${item.price * item.quantity}</p>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Show the cart section
    document.getElementById('cart').style.display = 'block';
}

// Function to proceed to checkout
function checkout() {
    // Collect product names and quantities for submission
    const productNames = cart.map(item => `${item.product} (x${item.quantity})`).join(', ');
    const quantities = cart.map(item => item.quantity).join(', ');

    // Fill the order form with the cart details
    document.getElementById('product').value = productNames;
    document.getElementById('quantity').value = quantities;

    // Show the order form section and hide the cart
    document.getElementById('cart').style.display = 'none';
    document.getElementById('contact').style.display = 'block';
}
