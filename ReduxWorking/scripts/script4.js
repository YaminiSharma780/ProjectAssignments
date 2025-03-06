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

// // Description of how combineReducers actually might be working
// function combineReducersSelfMade(reducers) {
//   const reducerKeys = Object.keys(reducers);
//   return function (state = {}, action) {
//     const nextState = {};
//     for (let i = 0; i < reducerKeys.length; i++) {
//       const key = reducerKeys[i];
//       const reducer = reducers[key];
//       const previousStateForKey = state[key];
//       const nextStateForKey = reducer(previousStateForKey, action);
//       nextState[key] = nextStateForKey;
//     }
//     return nextState;
//   };
// }

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
