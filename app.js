"use strict";

// ===== APP INITIALISERING =====
// Start app når DOM er loaded (hele HTML siden er færdig med at indlæse)
document.addEventListener("DOMContentLoaded", initApp);

const products = [
  {
    title: "Produkt 1",
    description: "Dette er beskrivelsen af produkt 1.",
    price: 199,
    inStock: true,
    image: "https://via.placeholder.com/150",
    category: "electronics",
  },
  {
    title: "Produkt 2",
    description: "Dette er beskrivelsen af produkt 2.",
    price: 299,
    inStock: false,
    image: "https://via.placeholder.com/150",
    category: "books",
  },
  {
    title: "Produkt 3",
    description: "Dette er beskrivelsen af produkt 3.",
    price: 399,
    inStock: true,
    image: "https://via.placeholder.com/150",
    category: "clothing",
  },
];

function initApp() {
  console.log("App initialized");
  displayAllProducts();
}

function displayAllProducts() {
  clearProductGrid();
  for (const product of products) {
    console.log(product.title);
  }
  displayProduct(products[0]);
}

function displayProduct(product) {
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
      <span class="product-stock ${stockClass}">${stockText}</span>
    </div>
  </article>
`;
  document.querySelector("#test").insertAdjacentHTML("beforeend", html);
}
