import productsReducer from "../reducers/productsReducer";
import { cartReducer } from "../reducers/cartReducer";
import { wishListReducer } from "../reducers/wishlistReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
});
