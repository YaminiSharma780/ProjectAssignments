import React, { useState, useEffect } from "react";
import { getProducts, currency } from "./products";

const Home = () => {
  const [products, setProducts] = useState<
    { id: number; image: string; name: string; price: number }[]
  >([]);
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="home">
      <div className="my-10 grid grid-cols-4 gap-5">
        {products.map((product) => (
          <div key={product.id} className="border-1 border-solid border-black">
            <img src={product.image} alt={product.name} />
            <div className="flex justify-between items-center mt-2">
              <span>{product.name}</span>
              <span>{currency.format(product.price)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
