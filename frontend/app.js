// 🔥 MULTI-CATEGORY PRODUCT DATA
let cart = [];
let wishlist = [];
let categories = {
    earbuds: ["Boat Airdopes", "Realme Buds", "Noise Buds", "OnePlus Buds"],
    phones: ["Samsung Galaxy", "iPhone", "Realme Narzo", "Redmi Note", "OnePlus Nord"],
    laptops: ["HP Laptop", "Dell Inspiron", "Lenovo IdeaPad", "Asus VivoBook"],
    shoes: ["Nike Shoes", "Adidas Shoes", "Puma Shoes", "Reebok Shoes"],
    dress: ["Red Dress", "Black Dress", "Floral Dress", "Party Wear Dress"],
    watch: ["Titan Watch", "Fastrack Watch", "Noise Smartwatch", "FireBoltt Watch"],
    charger: ["Mi Charger", "Samsung Charger", "Boat Charger", "OnePlus Charger"]
};

let tags = ["💰 Budget", "🔥 Popular", "⭐ Premium"];

// 🔥 UPDATED IMAGE MAP (MULTIPLE IMAGES PER CATEGORY)
let categoryImages = {
    earbuds: [
        "https://images.unsplash.com/photo-1518441902117-9b0c6d8a4c6e",
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df"
    ],
    phones: [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97"
    ],
    laptops: [
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    ],
    shoes: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    ],
    dress: [
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
        "https://images.unsplash.com/photo-1520975916090-3105956dac38"
    ],
    watch: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        "https://images.unsplash.com/photo-1508057198894-247b23fe5ade"
    ],
    charger: [
        "https://images.unsplash.com/photo-1583863788434-e58a36330cf0"
    ]
};
// 🔥 STORE BARGAIN PERCENTAGE FOR EACH CATEGORY
// 🔥 DEFAULT BARGAIN % = 70
let bargainPercent = {};

Object.keys(categories).forEach(cat => {
    bargainPercent[cat] = 30;
});
let customProducts = [];

// 🔥 GENERATE 1000 PRODUCTS
for (let i = 1; i <= 1000; i++) {
    let categoryKeys = Object.keys(categories);
    let category = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];

    let brand = categories[category][Math.floor(Math.random() * categories[category].length)];
    let tag = tags[Math.floor(Math.random() * tags.length)];
    let price = Math.floor(Math.random() * (60000 - 500) + 500);

    customProducts.push({
        name: `${brand} ${i}`,
        price: price,
        tag: tag,
        category: category
    });
}


// 🔍 SEARCH FUNCTION
function sendMessage() {
    const input = document.getElementById("userInput").value.toLowerCase().trim();

    if (!input) {
        displayProducts(customProducts);
        return;
    }

    const filteredProducts = customProducts.filter(p =>
        p.name.toLowerCase().includes(input) ||
        p.category.toLowerCase().includes(input)
    );

    displayProducts(filteredProducts);
}

// 🔥 BRAND BASED IMAGES
let brandImages = {
    // 👟 SHOES
    "Nike": [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    ],
    "Adidas": [
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    ],
    "Puma": [
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    ],
    "Reebok": [
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    ],
    "Boat": [
    "https://images.unsplash.com/photo-1518441902117-9b0c6d8a4c6e",
    "https://images.unsplash.com/photo-1590658268037-6bf12165a8df"
    ],

    "Realme": [
    "https://images.unsplash.com/photo-1598327105666-5b89351aff97"
    ],

    "Mi": [
    "https://images.unsplash.com/photo-1583863788434-e58a36330cf0"
    ],

    "OnePlus": [
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    ],
    // 📱 PHONES
    "Samsung": [
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    "https://images.unsplash.com/photo-1598327105666-5b89351aff97"
    ],
    "iPhone": [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    ],
    "Realme": [
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97"
    ],
    "Redmi": [
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97"
    ],
    "OnePlus": [
        "https://images.unsplash.com/photo-1580910051074-3eb694886505"
    ],

    // 💻 LAPTOPS
    "HP": [
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    ],
    "Dell": [
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    ],
    "Lenovo": [
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    ],
    "Asus": [
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    ],

    // 🎧 EARBUDS
    "Noise": [
    "https://images.unsplash.com/photo-1518441902117-9b0c6d8a4c6e",
    "https://images.unsplash.com/photo-1590658268037-6bf12165a8df"
    ],

    // ⌚ WATCH
    "Titan": [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    ],
    "Fastrack": [
        "https://images.unsplash.com/photo-1508057198894-247b23fe5ade"
    ],
    "FireBoltt": [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    "https://images.unsplash.com/photo-1508057198894-247b23fe5ade"
],

    // 🔌 CHARGER
    "Mi": [
        "https://images.unsplash.com/photo-1583863788434-e58a36330cf0"
    ]
};
// 🖥️ DISPLAY FUNCTION (ONLY CHANGE HERE)
function displayProducts(products) {
    let html = "";

    if (products.length === 0) {
        html = "<h2 style='text-align:center;'>No products found</h2>";
    } else {
        products.forEach((p) => {

    let image = "";

// ✅ PRIORITY 1: EARBUDS (ALWAYS FIRST)
// ✅ PRIORITY 1: EARBUDS (BRAND-WISE)
let category = p.category?.toLowerCase().trim();

if (category === "earbuds") {

    let name = p.name.toLowerCase();

    if (name.includes("boat")) {
        image = "https://images.unsplash.com/photo-1518441902117-9b0c6d8a4c6e";
    }
    else if (name.includes("noise")) {
        image = "https://images.unsplash.com/photo-1590658268037-6bf12165a8df";
    }
    else if (name.includes("oneplus")) {
        image = "https://images.unsplash.com/photo-1606220838315-056192d5e927";
    }
    else if (name.includes("realme")) {
        image = "https://images.unsplash.com/photo-1590658268037-6bf12165a8df";
    }
    else {
        // 🔥 GUARANTEED fallback (VERY IMPORTANT)
        let imgs = categoryImages.earbuds;
        image = imgs[Math.floor(Math.random() * imgs.length)];
    }
}

// ✅ PRIORITY 2: CUSTOM
else if (p.category === "custom") {
    image = "https://via.placeholder.com/200?text=New+Product";
}

// ✅ PRIORITY 3: CHARGER
else if (p.category === "charger") {
    image = "https://images.unsplash.com/photo-1583863788434-e58a36330cf0";
}

// ✅ PRIORITY 4: BRAND MATCH
else {
    for (let brand in brandImages) {
        if (
            p.name.toLowerCase().includes(brand.toLowerCase()) &&
            brandImages[brand]
        ) {
            let imgs = brandImages[brand];
            image = imgs[Math.floor(Math.random() * imgs.length)];
            break;
        }
    }
}

// ✅ PRIORITY 5: CATEGORY FALLBACK
if (!image && categoryImages[p.category]) {
    let imgs = categoryImages[p.category];
    image = imgs[Math.floor(Math.random() * imgs.length)];
}

// ✅ FINAL SAFETY
if (!image) {
    image = "https://via.placeholder.com/200";
}
p.image = image;
    // 🔥 4. HTML CARD (your existing)

            html += `
<div class="card">
    <img src="${image}"
         onerror="this.src='https://via.placeholder.com/200?text=No+Image'"
         style="width:100%; height:150px; object-fit:cover; border-radius:10px;"
         alt="product">

    <h3>${p.name}</h3>
    <p style="color:green; font-weight:bold;">₹${p.price}</p>
    <p>${p.tag}</p>
    <p style="color:gray;">${p.category}</p>

    <p>⭐ ${(Math.random() * 5).toFixed(1)}</p>

    <div style="display:flex; gap:5px; flex-wrap:wrap;">
        <button onclick="bargain('${p.name}', ${p.price}, '${p.category}')">🤝</button>
        <button onclick='addToCart(${JSON.stringify(p)})'>🛒</button>
        <button onclick="addToWishlist('${p.name}')">❤️</button>
        <button onclick="showDetails('${p.name}', ${p.price})">🔍</button>
    </div>
</div>
`;
});
    }

    document.getElementById("response").innerHTML = html;
}


// 🔥 LOAD DEFAULT PRODUCTS
window.onload = function () {
    displayProducts(customProducts);
};

function bargain(productName, originalPrice, category) {

    let userPrice = prompt(`Enter your price for ${productName} (Original ₹${originalPrice})`);
    if (!userPrice) return;

    userPrice = parseInt(userPrice);

    let percent = bargainPercent[category?.toLowerCase().trim()] ?? 30;

    let minPrice = Math.floor(originalPrice * (1 - percent / 100));

    let message = "";

    if (userPrice >= originalPrice) {
        message = "😄 Accepted! You paid full price.";

        let product = customProducts.find(p => p.name === productName);

        if (product) {
            addToCart(product);
        }
    }
    else if (userPrice >= minPrice) {
        message = `🤝 Deal! Accepted at ₹${userPrice}`;

        let product = customProducts.find(p => p.name === productName);

        if (product) {
            let updatedProduct = {
                ...product,
                price: userPrice
            };
            addToCart(updatedProduct);
        }
    }
    else {
        message = `❌ Rejected! Minimum allowed price is ₹${minPrice}`;
    }

    alert(message);
}
// 🔥 ENABLE ENTER KEY SEARCH (FIXED)
window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("userInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
function updateDiscounts() {
    let categoryKeys = Object.keys(categories);

    categoryKeys.forEach(cat => {
        let percent = prompt(`Update % for ${cat} (current ${bargainPercent[cat]}%)`);

        if (percent && !isNaN(percent)) {
            bargainPercent[cat] = parseInt(percent);
        }
    });

    alert("✅ Discounts updated!");
}
function updateSingleDiscount(category) {
    let percent = prompt(`Update discount % for ${category} (current ${bargainPercent[category]}%)`);

    if (percent && !isNaN(percent)) {
        bargainPercent[category] = parseInt(percent);
        alert(`✅ ${category} discount updated to ${percent}%`);
    }
}
function updateSelectedCategory() {
    let category = document.getElementById("categorySelect").value.toLowerCase().trim();

    if (!category) {
        alert("⚠️ Please select a category first");
        return;
    }

    let percent = prompt(`Update discount % (current ${category === "all" ? "all categories" : category})`);

    if (percent && !isNaN(percent)) {

        if (category === "all") {
            Object.keys(bargainPercent).forEach(cat => {
                bargainPercent[cat] = parseInt(percent);
            });
            alert(`✅ All categories updated to ${percent}%`);
        } 
        else {
            bargainPercent[category] = parseInt(percent);
            alert(`✅ ${category} discount updated to ${percent}%`);
        }
    }
}
function addToCart(product) {

    let item = cart.find(p => p.name === product.name);

    if (item) {
        item.qty++;
    } else {
        cart.push({
            name: product.name,
            price: product.price,
            image: product.image,   // ✅ store image
            category: product.category,
            qty: 1
        });
    }

    updateCartTotal();
}
function updateCartTotal() {
    let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    document.getElementById("cartTotal").innerText = "Total: ₹" + total;
}
function addToWishlist(name) {
    wishlist.push(name);
    alert(name + " added to wishlist ❤️");
}
function showDetails(name, price) {
    alert("Product: " + name + "\nPrice: ₹" + price);
}
function addProduct() {
    let name = document.getElementById("pName").value;
    let price = document.getElementById("pPrice").value;

    if (!name || !price) {
        alert("Enter product name and price");
        return;
    }

    customProducts.push({
        name: name,
        price: parseInt(price),
        tag: "🆕 New",
        category: "custom"
    });

    alert("✅ Product added!");
    displayProducts(customProducts);
}
function viewCart() {
    if (cart.length === 0) {
        alert("🛒 Cart is empty");
        return;
    }

    let html = "<h2>🛒 Your Cart</h2>";

    cart.forEach((item, index) => {
        html += `
        <div style="
            border:1px solid #ccc;
            padding:15px;
            margin:10px;
            display:flex;
            gap:15px;
            align-items:center;
            border-radius:10px;
            background:#fff;
        ">

            <!-- 🖼 IMAGE -->
            <img src="${item.image}" 
                 onerror="this.src='https://via.placeholder.com/80?text=No+Image'"
                 style="width:80px; height:80px; object-fit:cover; border-radius:8px;">

            <!-- 📦 DETAILS -->
            <div style="flex:1; text-align:left;">
                <h3>${item.name}</h3>
                <p><b>Price:</b> ₹${item.price}</p>
                <p><b>Category:</b> ${item.category}</p>
                <p><b>Qty:</b> ${item.qty}</p>

                <div style="display:flex; gap:5px; margin-top:5px;">
                    <button onclick="increaseQty(${index})">➕</button>
                    <button onclick="decreaseQty(${index})">➖</button>
                    <button onclick="removeItem(${index})">❌ Remove</button>
                </div>
            </div>

        </div>
        `;
    });

    // 💰 TOTAL
    let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    html += `<h2>Total: ₹${total}</h2>`;

    // 🔙 BACK BUTTON
    html += `<button onclick="displayProducts(customProducts)">⬅ Back to Shop</button>`;

    document.getElementById("response").innerHTML = html;
}
function increaseQty(index) {
    cart[index].qty++;
    updateCartTotal();
    viewCart();
}

function decreaseQty(index) {
    if (cart[index].qty > 1) {
        cart[index].qty--;
    } else {
        cart.splice(index, 1);
    }
    updateCartTotal();
    viewCart();
}
function removeItem(index) {
    cart.splice(index, 1);
    updateCartTotal();
    viewCart();
}