import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart-icon.svg";
import wishListIcon from "../assets/wish-list-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  updateAllProducts,
  updateLoader,
  updateError,
} from "../store/reducers/productsSlice";
import {
  loadCartItems,
  updateCartError,
  updateCartLoader,
} from "../store/reducers/cartSlice";
import {
  loadWishListItems,
  updateWishListLoader,
  updateWishListError,
} from "../store/reducers/wishlistSlice";

export default function Header() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "api/makeCall",
      payload: {
        url: "products",
        onStart: updateLoader.type,
        onSuccess: updateAllProducts.type,
        onFailure: updateError.type,
      },
    });

    dispatch({
      type: "api/makeCall",
      payload: {
        url: "carts/5",
        onStart: updateCartLoader.type,
        onSuccess: loadCartItems.type,
        onFailure: updateCartError.type,
      },
    });

    dispatch({
      type: "api/makeCall",
      payload: {
        url: "carts/5",
        onStart: updateWishListLoader.type,
        onSuccess: loadWishListItems.type,
        onFailure: updateWishListError.type,
      },
    });
  }, []);

  const cartItems = useSelector((state) => state.cartItems.list);
  const wishListItems = useSelector((state) => state.wishList.list);

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
            <div className="wish-list-items-count">
              {wishListItems.reduce((total) => total + 1, 0)}
            </div>
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
