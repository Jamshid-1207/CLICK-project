import { useState, useEffect } from "react";
import { getSavedCart } from "../utils/cartUtils";

export const CartApp = () => {
  const [cart, setCart] = useState(getSavedCart);

  useEffect(() => {
    const handleCartUpdated = () => setCart(getSavedCart());
    window.addEventListener("cartUpdated", handleCartUpdated);
    return () => window.removeEventListener("cartUpdated", handleCartUpdated);
  }, []);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart__container">
      <h2>Shopping Cart ({totalItems} items)</h2>
    </div>
  );
};
