// JavaScript to handle product selection and form display
function openOrderForm(productName, price) {
    // Show the order form section
    document.getElementById('orderFormSection').style.display = 'block';
    
    // Fill the form with selected product details
    document.getElementById('product').value = productName;
    document.getElementById('quantity').value = 1; // default quantity to 1
}
