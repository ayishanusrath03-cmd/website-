// Food Items
const menu = [
    { name: "Pizza", price: 250 },
    { name: "Burger", price: 150 },
    { name: "Fried Rice", price: 180 },
    { name: "Chicken Biryani", price: 220 }
];

let cart = [];

// Display Menu
function displayMenu() {
    let menuHTML = "";
 
    menu.forEach((item, index) => {
        menuHTML += `
            <div class="food-card">
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
                <button onclick="addToCart(${index})">
                    Add to Cart
                </button>
            </div>
        `;
    });

    document.getElementById("menu").innerHTML = menuHTML;
}

// Add Item to Cart
function addToCart(index) {
    cart.push(menu[index]);
    updateCart();
}

// Update Cart
function updateCart() {
    let cartHTML = "";
    let total = 0;

    cart.forEach((item) => {
        cartHTML += `<li>${item.name} - ₹${item.price}</li>`;
        total += item.price;
    });

    document.getElementById("cartItems").innerHTML = cartHTML;
    document.getElementById("total").innerText = total;
}

// Place Order
function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Order placed successfully! Thank you.");
    cart = [];
    updateCart();
}

// Load Menu
window.onload = displayMenu; 23

