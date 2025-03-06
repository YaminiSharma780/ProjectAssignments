import React from "react";
// import { productsList } from "./store/productsList";
import Product from "./components/Product";
import "./App.css";

import { store } from "./store/scripts/index.js";

export default function App() {
  console.log(store.getState());
  return (
    <div className="products-container">
      {store.getState().products.map(({ id, title, rating, price, image }) => {
        return (
          <Product
            key={id}
            title={title}
            rating={rating.rate}
            price={price}
            imageUrl={image}
          />
        );
      })}
    </div>
  );
}
