import { useCartStore } from "./src/store/CartStore";

let products = [];

document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.querySelector(".products__container");
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const category = tab.dataset.category;
      const filteredProducts =
        category === "all"
          ? products
          : products.filter((p) => p.category === category);

      displayProducts(filteredProducts, productsContainer);

      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });

  function displayProducts(productsToDisplay, container) {
    container.innerHTML = "";

    productsToDisplay.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product__card";

      card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" class="product__image" />
      <div class="product__info">
        <h3 class="product__title">${product.title}</h3>
        <p class="product__price">$${product.price}</p>
        <button class="btn btn-primary add-to-cart">Add to Cart</button>
      </div>
    `;

      const addItem = useCartStore.getState().addItem;

      card.querySelector(".add-to-cart").addEventListener("click", () => {
        addItem(product);
      });

      container.appendChild(card);
    });
  }

  async function fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      products = await response.json();
      displayProducts(products, productsContainer);
    } catch (error) {
      console.error("Ошибка при загрузке продуктов:", error);
      productsContainer.innerHTML =
        '<p class="error">Ошибка при загрузке продуктов. Попробуйте позже.</p>';
    }
  }

  fetchProducts();
});
