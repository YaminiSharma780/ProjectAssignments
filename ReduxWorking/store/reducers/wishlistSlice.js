import { createSlice } from "@reduxjs/toolkit";

// Slice Reducer from Redux Toolkit
// createSlice() will create Action Creator, Action Type, Reducer together in one go
const searchElement = (state, action) =>
  state.findIndex(
    (wishListItem) => wishListItem.productId === action.payload.productId
  );
const slice = createSlice({
  name: "wishList",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
  reducers: {
    updateWishListLoader(state) {
      state.loading = true;
    },
    updateWishListError(state, action) {
      state.loading = false;
      state.error = action.payload || "Something went wrong..";
    },
    loadWishListItems(state, action) {
      state.loading = false;
      state.error = "";
      state.list = action.payload.products;
    },
    wishListAddItem(state, action) {
      const foundElementIndex = searchElement(state.list, action);
      if (foundElementIndex === -1) {
        state.list.push({ ...action.payload });
      }
    },
    wishListRemoveItem(state, action) {
      const foundElementIndex = searchElement(state.list, action);
      state.list.splice(foundElementIndex, 1);
    },
  },
});
// console.dir(slice.reducer);
// console.dir(slice.actions);
export const {
  wishListAddItem,
  wishListRemoveItem,
  loadWishListItems,
  updateWishListError,
  updateWishListLoader,
} = slice.actions;
export const wishListReducer = slice.reducer;
