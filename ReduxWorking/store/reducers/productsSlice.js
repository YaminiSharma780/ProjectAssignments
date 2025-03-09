import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
  reducers: {
    updateLoader(state) {
      state.loading = true;
    },
    updateError(state, action) {
      state.loading = false;
      state.error =
        action.payload || "Something went wrong..";
    },
    updateAllProducts(state, action) {
      state.loading = false;
      state.error = false;
      state.list = action.payload;
    },
  },
});
// console.dir(slice.reducer);
// console.dir(slice.actions);
export const { updateAllProducts, updateLoader, updateError } = slice.actions;
export const productsReducer = slice.reducer;
