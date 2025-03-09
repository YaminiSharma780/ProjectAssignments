import React from "react";
import "../App.css";
import WishListItem from "../components/WishListItem";
import { useSelector } from "react-redux";

export default function WishList() {
  const wishListItems = useSelector((state) => state.wishList);
  // console.log(wishListItems);

  return (
    <div className="wish-list-container">
      <h2>Items in Your WishList</h2>
      <div className="wish-list-items-container">
        <div className="wish-list-header wish-list-item-container">
          <div className="wish-list-item">Item</div>
          <div className="item-price">Price</div>
        </div>
        {wishListItems.map(
          ({ productId, title, rating, price, imageUrl, quantity }) => (
            <WishListItem
              key={productId}
              productId={productId}
              title={title}
              price={price}
              quantity={quantity}
              imageUrl={imageUrl}
              rating={rating}
            />
          )
        )}
        <div className="wish-list-header wish-list-item-container">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
