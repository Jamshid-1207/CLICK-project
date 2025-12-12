import { useCartStore } from "../store/CartStore";

export const CartBadge = () => {
  const count = useCartStore((state) => state.count);

  return (
    <div className="cart__badge">
      <span>🛒 Cart</span>
      {count > 0 && <span className="cart__count">{count}</span>}
    </div>
  );
};
