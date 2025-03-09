import React from "react";
import "../App.css";
import WishListItem from "../components/WishListItem";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import Error from "./Error";

export default function WishList() {
  // const wishListItems = useSelector((state) => state.wishList);
  const wishListItems = useSelector(({ products, wishList }) => {
    return wishList.list
      .map(({ productId, quantity }) => {
        const wishListProduct = products.list.find(
          (product) => product.id === productId
        );
        return wishListProduct;
      })
      .filter(({ title }) => title);
  });
  console.log(wishListItems);

  const isLoading = useSelector((state) => state.wishList.loading);
  const isError = useSelector((state) => state.wishList.error);
  console.log(isLoading, isError);

  return isLoading === true ? (
    <Loader />
  ) : isError ? (
    <Error isError={isError} />
  ) : (
    <div className="wish-list-container">
      <h2>Items in Your WishList</h2>
      <div className="wish-list-items-container">
        <div className="wish-list-header wish-list-item-container">
          <div className="wish-list-item">Item</div>
          <div className="item-price">Price</div>
        </div>
        {wishListItems.map(({ id, title, rating, price, image, quantity }) => (
          <WishListItem
            key={id}
            productId={id}
            title={title}
            price={price}
            quantity={quantity}
            imageUrl={image}
            rating={rating.rate}
          />
        ))}
        <div className="wish-list-header wish-list-item-container">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
