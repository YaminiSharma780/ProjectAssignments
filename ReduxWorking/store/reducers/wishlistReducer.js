import { createSlice } from "@reduxjs/toolkit";

// Slice Reducer from Redux Toolkit
// createSlice() will create Action Creator, Action Type, Reducer together in one go
const searchElement = (state, action) =>
  state.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId
  );
const slice = createSlice({
  name: "wishList",
  initialState: [],
  reducers: {
    wishListAddItem(state, action) {
      const foundElementIndex = searchElement(state, action);
      if (foundElementIndex === -1) {
        state.push({ ...action.payload });
      }
    },
    wishListRemoveItem(state, action) {
      const foundElementIndex = searchElement(state, action);
      state.splice(foundElementIndex, 1);
    },
  },
});
// console.dir(slice.reducer);
// console.dir(slice.actions);
export const { wishListAddItem, wishListRemoveItem } = slice.actions;
export const wishListReducer = slice.reducer;
