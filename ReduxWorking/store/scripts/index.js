// import { combineReducers, createStore } from "redux";
import productsReducer from "../reducers/productsReducer";
import { cartReducer } from "../reducers/cartReducer";
import { wishListReducer } from "../reducers/wishlistReducer";
import { configureStore } from "@reduxjs/toolkit";

// const reducer = combineReducers({
//   products: productsReducer,
//   cartItems: cartReducer,
//   wishList: wishListReducer,
// });
// export const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__?.()
// );

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
});
