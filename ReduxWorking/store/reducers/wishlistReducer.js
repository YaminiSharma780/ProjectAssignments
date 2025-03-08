import { produce } from "immer";
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
export function wishListRemoveItem(productId) {
  return {
    type: WISHLIST_REMOVE_ITEM,
    payload: { productId },
  };
}

// Reducer

export function wishListReducer(initialState = [], action) {
  return produce(initialState, (state) => {
    // findIndex() returns -1 when element is not found
    const foundElementIndex = state.findIndex(
      (wishListItem) => wishListItem.productId === action.payload.productId
    );

    switch (action.type) {
      case WISHLIST_ADD_ITEM:
        if (foundElementIndex !== -1) {
          break;
        }
        state.push({ ...action.payload });
        break;
      case WISHLIST_REMOVE_ITEM:
        state.splice(foundElementIndex, 1);
        break;
    }
    return state;
  });
}

// export function wishListReducer(state = [], action) {
//   console.log(action.type);

//   const foundElement = state.find(
//     (wishListItem) => wishListItem.productId === action.payload.productId
//   );

//   switch (action.type) {
//     case WISHLIST_ADD_ITEM:
//       if (foundElement) {
//         return state;
//       }
//       return [...state, { ...action.payload }];
//     case WISHLIST_REMOVE_ITEM:
//       return state.filter(
//         (wishListItem) => wishListItem.productId !== action.payload.productId
//       );
//     default:
//       return state;
//   }
// }
