import React from "react";
import CartItem from "../components/CartItem";
import "../App.css";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cartItems);

  const totalPrice = cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {cartItems.map(({ id, title, rating, price, imageUrl, quantity }) => {
          return (
            <CartItem
              key={id}
              title={title}
              price={price}
              quantity={quantity}
              imageUrl={imageUrl}
              rating={rating}
            />
          );
        })}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">${totalPrice}</div>
        </div>
      </div>
    </div>
  );
}
