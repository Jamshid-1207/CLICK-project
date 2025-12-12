export const CartItem = ({ item, onRemove }) => {
  const price = parseFloat(item.price) || 0;
  const quantity = parseInt(item.quantity) || 0;

  return (
    <div className="cart__item">
      <img src={item.image} alt={item.title} className="cart__item-image" />
      <div className="cart__item-details">
        <h4 className="cart__item-title">{item.title}</h4>
        <p className="cart__item-price">
          ${price} × {quantity}
        </p>
        <p className="cart__item-total">
          Total: ${(price * quantity).toFixed(2)}
        </p>
      </div>
      <button className="btn btn-danger" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </div>
  );
};
