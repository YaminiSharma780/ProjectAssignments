import { createSlice } from "@reduxjs/toolkit";

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
// console.dir(slice.reducer);
// console.dir(slice.actions);
export const {
  cartAddItem,
  cartRemoveItem,
  cartIncreaseQuantity,
  cartDecreaseQuantity,
} = slice.actions;
export const cartReducer = slice.reducer;
