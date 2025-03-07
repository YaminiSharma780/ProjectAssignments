import React from "react";
import { useDispatch } from "react-redux";
import {
  cartDecreaseQuantity,
  cartIncreaseQuantity,
} from "../store/reducers/cartReducer";

export default function CartItem({
  productId,
  title,
  rating,
  price,
  imageUrl,
  quantity,
}) {
  const dispatch = useDispatch();
  console.log(productId, title, rating, price, imageUrl, quantity);

  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price.toFixed(2)}</div>
      <div className="item-quantity">
        <button onClick={() => dispatch(cartDecreaseQuantity(productId))}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => dispatch(cartIncreaseQuantity(productId))}>
          +
        </button>
      </div>
      <div className="item-total">${(quantity * price).toFixed(2)}</div>
    </div>
  );
}
