import { CartItem } from "./CartItem";

export const CartList = ({ cartItems, onRemoveItem }) => {
  if (cartItems.length === 0) {
    return (
      <div className="empty__cart">
        <h3>Your cart is empty</h3>
        <p>Add some products to get started!</p>
      </div>
    );
  }

  return (
    <div className="cart__list">
      {cartItems.map((item, index) => (
        <CartItem
          key={`${item.id}-${index}`}
          item={item}
          onRemove={onRemoveItem}
        />
      ))}
    </div>
  );
};
