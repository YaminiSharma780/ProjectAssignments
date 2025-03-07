import React from "react";

export default function WishListItem({ title, rating, price, imageUrl, quantity }) {
  return (
    <div className="wish-list-item-container">
      <div className="wish-list-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button>-</button>
        <span>{quantity}</span>
        <button>+</button>
      </div>
      <div className="item-total">${quantity * price}</div>
    </div>
  );
}
