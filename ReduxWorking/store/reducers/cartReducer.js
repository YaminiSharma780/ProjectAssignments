import { createStore } from "redux";

// DUCKS Pattern : https://github.com/erikras/ducks-modular-redux

// Action Types
export const CART_ADD_ITEM = "cart/addItem";
export const CART_REMOVE_ITEM = "cart/removeItem";
export const CART_INC_QUANTITY = "cart/incQuantity";
export const CART_DEC_QUANTITY = "cart/decQuantity";

// Action Creator
export function cartAddItem(productID, quantity = 1) {
  return {
    type: CART_ADD_ITEM,
    payload: { productID, quantity },
  };
}
export function cartRemoveItem(productID) {
  return {
    type: CART_REMOVE_ITEM,
    payload: { productID },
  };
}
export function cartIncreaseQuantity(productID) {
  return {
    type: CART_INC_QUANTITY,
    payload: { productID },
  };
}
export function cartDecreaseQuantity(productID) {
  return {
    type: CART_DEC_QUANTITY,
    payload: { productID },
  };
}

// Reducer
export function cartReducer(state = [], action) {
  console.log(action.type);

  const foundElement = state.find(
    (element) => element.productID === action.payload.productID
  );

  switch (action.type) {
    case CART_ADD_ITEM:
      if (foundElement) {
        return state.map((cartItem) => {
          if (cartItem.productID === foundElement.productID) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
      }
      return [...state, action.payload];
    case CART_REMOVE_ITEM:
      return state.filter(
        (cartItem) => cartItem.productID != action.payload.productID
      );
    case CART_INC_QUANTITY:
      return state.map((cartItem) => {
        if (cartItem.productID === action.payload.productID) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }
        return cartItem;
      });

    case CART_DEC_QUANTITY:
      return state
        .map((cartItem) => {
          if (cartItem.productID === action.payload.productID) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity > 0);

    default:
      return state;
  }
}
