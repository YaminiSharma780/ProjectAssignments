import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../reducers/productsSlice";
import { cartReducer } from "../reducers/cartSlice";
import { wishListReducer } from "../reducers/wishlistSlice";
import { apiMiddleware } from "../middleware/apiMiddleware";
// import { logger } from "../middleware/logger";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), apiMiddleware],
});
