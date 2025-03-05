import { createStore } from "redux";

const ageElement = document.querySelector(".age-element");
const decAgeButton = document.querySelector(".dec-age");

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

// let store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__());
// store enhancer connects redux to redux devtools (only if extension installed)
// since it will give error when not installed so used window and ?. (optional chaining)
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
  ageElement.innerText = store.getState().age;
});

store.dispatch({ type: AGE_INCREMENT }); // {count: 0, company: 'adobe', age: 36}
setTimeout(() => {
  store.dispatch({ type: AGE_DECREMENT }); // {count: 0, company: 'adobe', age: 31}
}, 1000);
// unsubscribe(); // after this line state will change but won't show because we have unsubscribed it
setTimeout(() => {
  store.dispatch({ type: AGE_INCREMENT_BY, payload: 100 }); // {count: 0, company: 'adobe', age: 136}
}, 2000);
decAgeButton.addEventListener("click", () => {
  store.dispatch({ type: AGE_DECREMENT_BY, payload: 5 }); // {count: 0, company: 'adobe', age: 36}
});
