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
      state.error = action.payload || "Something went wrong..";
    },
    updateAllProducts(state, action) {
      state.loading = false;
      state.error = "";
      state.list = action.payload;
    },
  },
});
export const selectorGetAllProductsState = (state) => state.products.list;
export const selectorGetIsLoadingState = (state) => state.products.loading;
export const selectorGetIsErrorState = (state) => state.products.error;
export const { updateAllProducts, updateLoader, updateError } = slice.actions;
export const productsReducer = slice.reducer;
