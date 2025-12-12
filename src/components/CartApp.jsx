import { useState, useEffect } from "react";
import { CartList } from "./CartList";
import { getSavedCart } from "../utils/cartUtils";

export const CartApp = () => {
  const [cart, setCart] = useState(getSavedCart);

  useEffect(() => {
    const handleCartUpdated = () => setCart(getSavedCart());
    window.addEventListener("cartUpdated", handleCartUpdated);
    return () => window.removeEventListener("cartUpdated", handleCartUpdated);
  }, []);

  const handleRemoveItem = (itemId) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((item) => item.id !== itemId);
      localStorage.setItem("cart", JSON.stringify(newCart));
      window.dispatchEvent(new Event("cartUpdated"));
      return newCart;
    });
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart__container">
      <h2>Shopping Cart ({totalItems} items)</h2>
      <CartList cartItems={cart} onRemoveItem={handleRemoveItem} />
      {cart.length > 0 && (
        <div className="cart__summary">
          <div className="cart__total">Total: ${totalPrice.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
};
