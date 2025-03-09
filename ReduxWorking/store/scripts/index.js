import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../reducers/productsReducer";
import { cartReducer } from "../reducers/cartReducer";
import { wishListReducer } from "../reducers/wishlistReducer";
import { logger } from "../middleware/logger";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});
