import { createStore } from "redux";

// DUCKS Pattern : https://github.com/erikras/ducks-modular-redux

// Action Types
export const CART_ADD_ITEM = "cart/addItem";
export const CART_REMOVE_ITEM = "cart/removeItem";
export const CART_INC_QUANTITY = "cart/incQuantity";
export const CART_DEC_QUANTITY = "cart/decQuantity";

// Action Creator
export function cartAddItem(productData) {
  return {
    type: CART_ADD_ITEM,
    payload: productData,
  };
}
export function cartRemoveItem(productId) {
  return {
    type: CART_REMOVE_ITEM,
    payload: { productId },
  };
}
export function cartIncreaseQuantity(productId) {
  return {
    type: CART_INC_QUANTITY,
    payload: { productId },
  };
}
export function cartDecreaseQuantity(productId) {
  return {
    type: CART_DEC_QUANTITY,
    payload: { productId },
  };
}

// Reducer
export function cartReducer(state = [], action) {
  console.log(action.type);

  const foundElement = state.find(
    (cartItem) => cartItem.productId === action.payload.productId
  );

  switch (action.type) {
    case CART_ADD_ITEM:
      if (foundElement) {
        return state.map((cartItem) => {
          if (cartItem.productId === foundElement.productId) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
      }
      return [...state, { ...action.payload, quantity: 1 }];
    case CART_REMOVE_ITEM:
      return state.filter(
        (cartItem) => cartItem.productId != action.payload.productId
      );
    case CART_INC_QUANTITY:
      return state.map((cartItem) => {
        if (cartItem.productId === action.payload.productId) {
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
          if (cartItem.productId === action.payload.productId) {
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
