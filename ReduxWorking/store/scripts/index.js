import { combineReducers, createStore } from "redux";
import productsReducer from "../reducers/productsReducer";
import { cartReducer } from "../reducers/cartReducer";
import { wishListReducer } from "../reducers/wishlistReducer";

// REDUCER
const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

// STORE
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);
