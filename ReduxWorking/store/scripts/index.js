import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../reducers/productsSlice";
import { cartReducer } from "../reducers/cartSlice";
import { wishListReducer } from "../reducers/wishlistSlice";
import { apiMiddleware } from "../middleware/apiMiddleware";
import { thunkFun } from "../middleware/thunkMiddleware";
import { logger } from "../middleware/logger";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
  // this will over-rite redux toolkit middleware
  // middleware: [logger],

  // we have thunk inside redux toolkit called as thunk middleware
  // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), apiMiddleware],
  // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), thunkFun],
});
