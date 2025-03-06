import { combineReducers, createStore } from "redux";
import productsReducer from "../reducers/productsReducer";
import {
  cartAddItem,
  cartDecreaseQuantity,
  cartIncreaseQuantity,
  cartReducer,
  cartRemoveItem,
} from "../reducers/cartReducer";
import {
  wishListReducer,
  wishListAddItem,
  wishListRemoveItem,
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
store.dispatch(cartAddItem(13));
store.dispatch(cartAddItem(6));
store.dispatch(cartAddItem(8));
store.dispatch(cartIncreaseQuantity(6));
store.dispatch(cartDecreaseQuantity(6));
store.dispatch(cartRemoveItem(6));
store.dispatch(cartDecreaseQuantity(8));
store.dispatch(wishListAddItem(10));
store.dispatch(wishListAddItem(15));
store.dispatch(wishListRemoveItem(10));
