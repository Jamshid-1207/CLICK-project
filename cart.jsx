import { createRoot } from "react-dom/client";
import { CartApp } from "./src/components/CartApp";
import { CartBadge } from "./src/components/CartBadge";

const cartContainer = document.getElementById("cart__container");
const cartRoot = document.getElementById("cart__root");

if (cartContainer) {
  createRoot(cartContainer).render(<CartApp />);
}

if (cartRoot) {
  createRoot(cartRoot).render(<CartBadge />);
}
