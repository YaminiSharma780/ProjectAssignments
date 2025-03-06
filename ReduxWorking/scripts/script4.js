import { combineReducers, createStore } from "redux";
import productsReducer from "../reducers/productsReducer";
import {
  cartReducer,
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_INC_QUANTITY,
  CART_DEC_QUANTITY,
} from "../reducers/cartReducer";
import {
  wishListReducer,
  WISHLIST_ADD_ITEM,
  WISHLIST_REMOVE_ITEM,
} from "../reducers/wishlistReducer";

// REDUCER
const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

// STORE
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

// DISPATCH
store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productID: 6, quantity: 1 },
});
store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productID: 8, quantity: 1 },
});
store.dispatch({
  type: CART_INC_QUANTITY,
  payload: { productID: 6 },
});
store.dispatch({
  type: CART_DEC_QUANTITY,
  payload: { productID: 6 },
});
store.dispatch({
  type: CART_REMOVE_ITEM,
  payload: { productID: 6 },
});
store.dispatch({
  type: CART_DEC_QUANTITY,
  payload: { productID: 8 },
});

store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: { productID: 10 },
});
store.dispatch({
  type: WISHLIST_REMOVE_ITEM,
  payload: { productID: 10 },
});
