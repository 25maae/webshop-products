"use strict";

// ===== APP INITIALISERING =====
// Start app når DOM er loaded (hele HTML siden er færdig med at indlæse)
document.addEventListener("DOMContentLoaded", initApp);

// Initialize the app - sæt event listeners og hent data
function initApp() {
  console.log("App initialized");
}

const product1 = {
  title: "Fjallraven - Foldsack No. 1 Backpack",
  price: 849,
  inStock: true,
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  description: "Din perfekte pakke til hverdagsbrug og eventyr.",
  category: "electronics",
};
const product2 = {
  title: "Mens Casual Premium Slim Fit T-Shirts",
  price: 179,
  inStock: true,
  image:
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  description: "Den mest behagelige t-shirt du nogensinde vil eje.",
  category: "clothing",
};
const product3 = {
  title: "Mens Cotton Jacket",
  price: 999,
  inStock: false,
  image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  description: "En stilfuld jakke til alle årstider.",
  category: "clothing",
};

let stockText;
let stockClass;
if (product1.inStock) {
  stockText = "På lager";
  stockClass = "in-stock";
} else {
  stockText = "Udsolgt";
  stockClass = "out-of-stock";
}

const html = /*html*/ `
<article class="product-card">
<img src="${product1.image}" class="product-image">
<div class="product-info">
<h2 class="product-name">${product1.title}</h2>
<p class="product-description">${product1.description}</p>
<p class="product-price">${product1.price} kr</p>
</div>
</article>
`;
document.querySelector("#test").insertAdjacentHTML("beforeend", html);

const html2 = /*html*/ `
<article class="product-card">
<img src="${product2.image}" class="product-image">
<div class="product-info">
<h2 class="product-name">${product2.title}</h2>
<p class="product-description">${product2.description}</p>
<p class="product-price">${product2.price} kr</p>
</div>
</article>
`;
document.querySelector("#test").insertAdjacentHTML("beforeend", html);

const html3 = /*html*/ `
<article class="product-card">
<img src="${product3.image}" class="product-image">
<div class="product-info">
<h2 class="product-name">${product3.title}</h2>
<p class="product-description">${product3.description}</p>
<p class="product-price">${product3.price} kr</p>
</div>
</article>
`;
document.querySelector("#test").insertAdjacentHTML("beforeend", html);
