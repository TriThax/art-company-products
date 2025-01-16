let cart = [];
let total = 0;

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    total += itemPrice;
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('totalPrice').textContent = total;
}

function sendOrder() {
    const cartDetails = cart.map(item => `${item.name} - $${item.price}`).join('\n');
    const totalPrice = total;

    // Send the cart details to Netlify function
    fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            cart: cartDetails,
            total: totalPrice
        })
    })
    .then(response => response.json())
    .then(data => {
        alert('Your quote request has been sent!');
        // Clear cart after sending the email
        cart = [];
        total = 0;
        updateCart();
    })
    .catch(error => console.error('Error sending order:', error));
}
