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

function dispatchFun(type, payload) {
  store.dispatch({
    type: type,
    payload: payload,
  });
}
dispatchFun(CART_ADD_ITEM, { productID: 13, quantity: 2 });
dispatchFun(CART_ADD_ITEM, { productID: 6, quantity: 1 });
dispatchFun(CART_ADD_ITEM, { productID: 8, quantity: 1 });
dispatchFun(CART_INC_QUANTITY, { productID: 6 });
dispatchFun(CART_DEC_QUANTITY, { productID: 6 });
dispatchFun(CART_REMOVE_ITEM, { productID: 6 });
dispatchFun(CART_DEC_QUANTITY, { productID: 8 });
dispatchFun(WISHLIST_ADD_ITEM, { productID: 10 });
dispatchFun(WISHLIST_ADD_ITEM, { productID: 15 });
dispatchFun(WISHLIST_REMOVE_ITEM, { productID: 10 });
