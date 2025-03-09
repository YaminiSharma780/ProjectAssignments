import React from "react";
import CartItem from "../components/CartItem";
import "../App.css";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import Error from "./Error";

export default function Cart() {
  const cartItems = useSelector(({ products, cartItems }) => {
    return cartItems.list
      .map(({ productId, quantity }) => {
        const cartProduct = products.list.find(
          (product) => product.id === productId
        );
        return { ...cartProduct, quantity };
      })
      .filter(({ title }) => title);
  });
  console.log(cartItems);

  const isLoading = useSelector((state) => state.cartItems.loading);
  const isError = useSelector((state) => state.cartItems.error);
  console.log(isLoading, isError);

  return isLoading === true ? (
    <Loader />
  ) : isError ? (
    <Error isError={isError} />
  ) : (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {cartItems.map(({ id, title, rating, price, image, quantity }) => {
          return (
            <CartItem
              key={id}
              productId={id}
              title={title}
              price={price}
              quantity={quantity}
              imageUrl={image}
              rating={rating.rate}
            />
          );
        })}

        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          {!isLoading && (
            <div className="total">
              $
              {cartItems
                .reduce(
                  (total, cartItem) =>
                    total + cartItem.price * cartItem.quantity,
                  0
                )
                .toFixed(2)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
