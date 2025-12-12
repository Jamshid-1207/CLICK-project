import { useCartStore } from "../store/CartStore";

export const normalizeCartItem = (item) => ({
  id: item.id,
  title: item.title || "No title",
  price: parseFloat(item.price) || 0,
  image: item.image || "",
  quantity: parseInt(item.quantity) || 0,
});

export const getSavedCart = () => {
  try {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    return savedCart.map(normalizeCartItem);
  } catch {
    return [];
  }
};

export const addToCart = (product) => {
  try {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        title: product.title,
        price: parseFloat(product.price) || 0,
        image: product.image || "",
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  } catch (err) {
    console.error("Ошибка при добавлении товара в корзину", err);
  }
};

export const addCardEventListeners = (card, product) => {
  const addItem = useCartStore.getState().addItem;
  const flipCard = card.querySelector(".flip-card-inner");

  card.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
      addItem(product);
    } else if (e.target.classList.contains("show-desc")) {
      flipCard.classList.add("flipped");
    } else if (e.target.classList.contains("hide-desc")) {
      flipCard.classList.remove("flipped");
    }
  });
};
