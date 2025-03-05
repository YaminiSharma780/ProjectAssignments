import { createStore } from "redux";

let initialState = {
  count: 0,
  company: "adobe",
  age: 26,
};

const AGE_INCREMENT = "age/increment";
const AGE_DECREMENT = "age/decrement";
const AGE_INCREMENT_BY = "age/incrementBy";
const AGE_DECREMENT_BY = "age/decrementBy";

function reducer(state = initialState, action) {
  //   if (action.type === AGE_INCREMENT) {
  //     return { ...state, age: state.age + 10 };
  //   } else if (action.type === AGE_DECREMENT) {
  //     return { ...state, age: state.age - 5 };
  //   } else if (action.type === AGE_INCREMENT_BY) {
  //     return { ...state, age: state.age + action.payload };
  //   } else if (action.type === AGE_DECREMENT_BY) {
  //     return { ...state, age: state.age - action.payload };
  //   }
  //   return state;

  switch (action.type) {
    case AGE_INCREMENT:
      return { ...state, age: state.age + 10 };
    case AGE_DECREMENT:
      return { ...state, age: state.age - 5 };
    case AGE_INCREMENT_BY:
      return { ...state, age: state.age + action.payload };
    case AGE_DECREMENT_BY:
      return { ...state, age: state.age - action.payload };
    default:
      return state;
  }
}

let store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({ type: AGE_INCREMENT }); // {count: 0, company: 'adobe', age: 36}
store.dispatch({ type: AGE_DECREMENT }); // {count: 0, company: 'adobe', age: 31}
store.dispatch({ type: AGE_INCREMENT_BY, payload: 10 }); // {count: 0, company: 'adobe', age: 41}
store.dispatch({ type: AGE_DECREMENT_BY, payload: 5 }); // {count: 0, company: 'adobe', age: 36}
