import { useState, useEffect } from "react";

export const CartBadge = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const total = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCount(total);
    } catch {
      setCount(0);
    }
  };

  useEffect(() => {
    updateCount();
    window.addEventListener("cartUpdated", updateCount);
    return () => window.removeEventListener("cartUpdated", updateCount);
  }, []);

  return (
    <div className="cart__badge">
      <span>🛒 Cart</span>
      {count > 0 && <span className="cart__count">{count}</span>}
    </div>
  );
};
