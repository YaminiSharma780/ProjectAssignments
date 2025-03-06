import { createStore } from "redux";
import { productsList } from "../productsList";

let initialState = {
  products: productsList,
  cartItems: [],
  wishList: [],
};

const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_INC_QUANTITY = "cart/incQuantity";
const CART_DEC_QUANTITY = "cart/decQuantity";
const WISHLIST_ADD_ITEM = "wishList/addItem";
const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

// REDUCER
function reducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case CART_ADD_ITEM:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.productID != action.payload.productID
        ),
      };
    case CART_INC_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.productID == action.payload.productID) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
          }
          return cartItem;
        }),
      };
    case CART_DEC_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems
          .map((cartItem) => {
            if (cartItem.productID == action.payload.productID) {
              return {
                ...cartItem,
                quantity: cartItem.quantity - 1,
              };
            }
            return cartItem;
          })
          .filter((cartItem) => cartItem.quantity > 0),
      };
    case WISHLIST_ADD_ITEM:
      return {
        ...state,
        wishList: [...state.wishList, action.payload.productID],
      };
    case WISHLIST_REMOVE_ITEM:
      return {
        ...state,
        wishList: state.wishList.filter(
          (wishListItem) => wishListItem !== action.payload.productID
        ),
      };
    default:
      return state;
  }
}

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
  type: CART_DEC_QUANTITY,
  payload: { productID: 8 },
});
store.dispatch({
  type: CART_REMOVE_ITEM,
  payload: { productID: 6 },
});

store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: { productID: 10 },
});
store.dispatch({
  type: WISHLIST_REMOVE_ITEM,
  payload: { productID: 10 },
});
