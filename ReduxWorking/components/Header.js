import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart-icon.svg";
import wishListIcon from "../assets/wish-list-icon.svg";
import { useSelector } from "react-redux";

export default function Header() {
  const cartItems = useSelector((state) => state.cartItems);
  const wishListItems = useSelector((state) => state.wishList);
  console.log(cartItems);
  console.log(wishListItems);

  return (
    <header>
      <div className="header-contents">
        <h2>
          <Link to="/">Shopzee</Link>
        </h2>
        <div className="header-contents-routes">
          <Link className="wish-list-link" to="/wishList">
            <img
              className="wish-list-icon"
              src={wishListIcon}
              alt="wish-icon"
            />
            <div className="wish-list-items-count">{wishListItems.length}</div>
          </Link>
          <Link className="cart-link" to="/cart">
            <img className="cart-icon" src={cartIcon} alt="cart-icon" />
            <div className="cart-items-count">
              {cartItems.reduce(
                (total, cartItem) => total + cartItem.quantity,
                0
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
