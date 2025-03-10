import { createSelector, createSlice } from "@reduxjs/toolkit";

// Slice Reducer from Redux Toolkit
// createSlice() will create Action Creator, Action Type, Reducer together in one go
const searchElement = (state, action) =>
  state.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId
  );
const slice = createSlice({
  name: "cartItems",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
  reducers: {
    updateCartLoader(state) {
      state.loading = true;
    },
    updateCartError(state, action) {
      state.loading = false;
      state.error = action.payload || "Something went wrong..";
    },
    loadCartItems(state, action) {
      state.loading = false;
      state.error = "";
      state.list = action.payload.products;
    },
    cartAddItem(state, action) {
      const foundElementIndex = searchElement(state.list, action);
      if (foundElementIndex !== -1) {
        state.list[foundElementIndex].quantity += 1;
      } else {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },
    cartRemoveItem(state, action) {
      const foundElementIndex = searchElement(state.list, action);
      state.list.splice(foundElementIndex, 1);
    },
    cartIncreaseQuantity(state, action) {
      const foundElementIndex = searchElement(state.list, action);
      state.list[foundElementIndex].quantity += 1;
    },
    cartDecreaseQuantity(state, action) {
      const foundElementIndex = searchElement(state.list, action);
      state.list[foundElementIndex].quantity -= 1;
      if (state.list[foundElementIndex].quantity === 0) {
        state.list.splice(foundElementIndex, 1);
      }
    },
  },
});

export const getAllCartItemsState = (cartItems, products) => {
  return cartItems
    .map(({ productId, quantity }) => {
      const cartProduct = products.find((product) => product.id === productId);
      return { ...cartProduct, quantity };
    })
    .filter(({ title }) => title);
};
// Memoizing selectorGetAllCartItemsState here with the help of createSelector
export const selectorGetAllCartItemsState = createSelector(
  (state) => state.cartItems.list || [],
  (state) => state.products.list || [],
  getAllCartItemsState
);

export const selectorGetIsLoadingState = (state) => state.cartItems.loading;
export const selectorGetIsErrorState = (state) => state.cartItems.error;

export const {
  loadCartItems,
  cartAddItem,
  cartRemoveItem,
  cartIncreaseQuantity,
  cartDecreaseQuantity,
  updateCartLoader,
  updateCartError,
} = slice.actions;
export const cartReducer = slice.reducer;
