// import { produce } from "immer";
// import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

// DUCKS Pattern : https://github.com/erikras/ducks-modular-redux

// Action Types
// const CART_ADD_ITEM = "cart/addItem";
// const CART_REMOVE_ITEM = "cart/removeItem";
// const CART_INC_QUANTITY = "cart/incQuantity";
// const CART_DEC_QUANTITY = "cart/decQuantity";

// Action Creator
// export function cartAddItem(productData) {
//   return {
//     type: CART_ADD_ITEM,
//     payload: productData,
//   };
// }
// export function cartRemoveItem(productId) {
//   return {
//     type: CART_REMOVE_ITEM,
//     payload: { productId },
//   };
// }
// export function cartIncreaseQuantity(productId) {
//   return {
//     type: CART_INC_QUANTITY,
//     payload: { productId },
//   };
// }
// export function cartDecreaseQuantity(productId) {
//   return {
//     type: CART_DEC_QUANTITY,
//     payload: { productId },
//   };
// }

// Simple Reducer
// export function cartReducer(initialState = [], action) {
//   return produce(initialState, (state) => {
//     // findIndex() returns -1 when element is not found
//     const foundElementIndex = state.findIndex(
//       (cartItem) => cartItem.productId === action.payload.productId
//     );
//     switch (action.type) {
//       case CART_ADD_ITEM:
//         if (foundElementIndex !== -1) {
//           state[foundElementIndex].quantity += 1;
//           break;
//         }
//         state.push({ ...action.payload, quantity: 1 });
//         break;
//       case CART_REMOVE_ITEM:
//         state.splice(foundElementIndex, 1);
//         break;
//       case CART_INC_QUANTITY:
//         state[foundElementIndex].quantity += 1;
//         break;
//       case CART_DEC_QUANTITY:
//         state[foundElementIndex].quantity -= 1;
//         if (state[foundElementIndex].quantity === 0) {
//           state.splice(foundElementIndex, 1);
//         }
//         break;
//     }
//     return state;
//   });
// }

// Slice Reducer from Redux Toolkit
// createSlice() will create Action Creator, Action Type, Reducer together in one go
const searchElement = (state, action) =>
  state.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId
  );
const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    cartAddItem(state, action) {
      const foundElementIndex = searchElement(state, action);
      if (foundElementIndex !== -1) {
        state[foundElementIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    cartRemoveItem(state, action) {
      const foundElementIndex = searchElement(state, action);
      state.splice(foundElementIndex, 1);
    },
    cartIncreaseQuantity(state, action) {
      const foundElementIndex = searchElement(state, action);
      state[foundElementIndex].quantity += 1;
    },
    cartDecreaseQuantity(state, action) {
      const foundElementIndex = searchElement(state, action);
      state[foundElementIndex].quantity -= 1;
      if (state[foundElementIndex].quantity === 0) {
        state.splice(foundElementIndex, 1);
      }
    },
  },
});
console.dir(slice.reducer);
console.dir(slice.actions);
export const {
  cartAddItem,
  cartRemoveItem,
  cartIncreaseQuantity,
  cartDecreaseQuantity,
} = slice.actions;
export const cartReducer = slice.reducer;
