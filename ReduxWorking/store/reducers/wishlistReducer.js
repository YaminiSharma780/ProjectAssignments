import { createStore } from "redux";

// DUCKS Pattern : https://github.com/erikras/ducks-modular-redux

// Action Types
export const WISHLIST_ADD_ITEM = "wishList/addItem";
export const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

// Action Creator
export function wishListAddItem(productData) {
  return {
    type: WISHLIST_ADD_ITEM,
    payload: productData,
  };
}
export function wishListRemoveItem(productID) {
  return {
    type: WISHLIST_REMOVE_ITEM,
    payload: { productID },
  };
}

// Reducer
export function wishListReducer(state = [], action) {
  console.log(action.type);

  const foundElement = state.find(
    (cartItem) => cartItem.productId === action.payload.productId
  );

  switch (action.type) {
    case WISHLIST_ADD_ITEM:
      if (foundElement) {
        return state;
      }
      return [...state, { ...action.payload }];
    case WISHLIST_REMOVE_ITEM:
      return state.filter(
        (wishListItem) => wishListItem !== action.payload.productID
      );
    default:
      return state;
  }
}
