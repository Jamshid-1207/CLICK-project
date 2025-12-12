import { CartList } from "./CartList";
import { useCartStore } from "../store/CartStore";

export const CartApp = () => {
  const cart = useCartStore((state) => state.cart);
  const removeItem = useCartStore((state) => state.removeItem);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart__container">
      <h2>Shopping Cart ({totalItems} items)</h2>
      <CartList cartItems={cart} onRemoveItem={removeItem} />
      {cart.length > 0 && (
        <div className="cart__summary">
          <div className="cart__total">Total: ${totalPrice.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
};
