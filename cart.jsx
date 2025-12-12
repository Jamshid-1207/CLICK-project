import { createRoot } from "react-dom/client";
import { CartBadge } from "./src/components/CartBadge";

const cartRoot = document.getElementById("cart__root");
if (cartRoot) {
  createRoot(cartRoot).render(<CartBadge />);
}
