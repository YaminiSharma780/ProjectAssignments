import { createStore } from "redux";

export const WISHLIST_ADD_ITEM = "wishList/addItem";
export const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

export function wishListReducer(state = [], action) {
  console.log(action.type);
  switch (action.type) {
    case WISHLIST_ADD_ITEM:
      return [...state, action.payload.productID];
    case WISHLIST_REMOVE_ITEM:
      return state.filter(
        (wishListItem) => wishListItem !== action.payload.productID
      );
    default:
      return state;
  }
}
