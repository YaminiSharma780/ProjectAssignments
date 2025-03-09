import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    updateAllProducts(state, action) {
      return action.payload;
    },
  },
});
console.dir(slice.reducer);
console.dir(slice.actions);
export const { updateAllProducts } = slice.actions;
export const productsReducer = slice.reducer;
