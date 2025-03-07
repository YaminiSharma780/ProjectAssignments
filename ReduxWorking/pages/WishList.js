import React from "react";
import "../App.css";
import WishListItem from "../components/WishListItem";

export default function WishList() {
  const wishListItems = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      quantity: 1,
      rating: 3.9,
      price: 109.95,
    },
    {
      id: 3,
      title: "Mens Casual Slim Fit",
      imageUrl: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      quantity: 1,
      rating: 2.1,
      price: 15.99,
    },
  ];

  return (
    <div className="wish-list-container">
      <h2>Items in Your WishList</h2>
      <div className="wish-list-items-container">
        <div className="wish-list-header wish-list-item-container">
          <div className="wish-list-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {wishListItems.map(({ id, title, rating, price, imageUrl, quantity }) => (
          <WishListItem
            key={id}
            title={title}
            price={price}
            quantity={quantity}
            imageUrl={imageUrl}
            rating={rating}
          />
        ))}
        <div className="wish-list-header wish-list-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">$500</div>
        </div>
      </div>
    </div>
  );
}
