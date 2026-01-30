"use strict";

// import { products } from "./data.js";
import { getExcerpt, getStockStatus, getAllProducts } from "./helpers.js";

// Event listener - starter appen når siden er loaded
document.addEventListener("DOMContentLoaded", initApp);

// Initialize app
async function initApp() {
  console.log("App initialized 🚀");
  const products = await getAllProducts();
  displayAllProducts(products);
}

// Vis alle produkter
const displayAllProducts = (products) => {
  const grid = document.querySelector("#productGrid");
  grid.innerHTML = products.map(displayProduct).join("");
};

// Vis ét produkt
function displayProduct(product) {
  const stock = getStockStatus(product.inStock);

  return `
  <article class="product-card">
    <a href="product.html?id=${product.id}"><img src="${product.image}" class="product-image" /></a>
    <h2 class="product-title"><a href="product.html?id=${product.id}">${product.title}</a></h2>
    <p class="product-description">${getExcerpt(product.description)}</p>
    <p class="product-price">$${product.price}</p>
    <p class="product-stock ${stock.class}">${stock.text}</p>
  </article>`;
}

// Traditionel
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));

// Arrow function
const addArrow = (a, b) => a + b;
console.log(addArrow(5, 3));

// Traditionel
function square(x) {
  return x * x;
}
console.log(square(4));

// Arrow function (kort syntaks)
const squareArrow = (x) => x * x; // Parenteser kan droppes ved ét parameter
console.log(squareArrow(4));
