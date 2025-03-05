// let state = {
//   count: 0,
// };

// Mutable State || NOT Recommended Way
// function incM() {
//   state.count = state.count + 1;
// }
// let prevState = state; // Shallow Copy (actually a reference)
// console.log("prevState : ", prevState); // {count: 0}
// incM();
// console.log(state); // {count: 1}
// incM();
// console.log(state); // {count: 2}
// console.log("prevState : ", prevState); // {count: 2}

// state  ----> { count: 0 } <---- prevState

// Immutable State || Recommended Way
// function incIMM() {
//   state = { count: state.count + 1 }; // creates a new object + reassigns state to new object
// }
// let prevState = state; // // Shallow Copy (reassigning state to a new object)
// console.log("prevState : ", prevState); // {count: 0}
// incIMM(); // state now points to a new object
// console.log(state); // {count: 1}
// incIMM(); // state now points to a new object
// console.log(state); // {count: 2}
// console.log("prevState : ", prevState); // {count: 0} // prevState still points to the old object

// state  ----> { count: 1 }
// prevState ----> { count: 0 }

// --------------------------------------

// let state = {
//   count: 0,
//   company: "adobe",
//   age: 26,
// };
// console.log(state); // {count: 0, company: 'adobe', age: 26}

// function incCountState() {
//   state = { ...state, count: state.count + 1 };
// }
// incCountState();
// console.log(state); // {count: 1, company: 'adobe', age: 26}

// function changeCompanyState() {
//   state = { ...state, company: "google" };
// }
// changeCompanyState();
// console.log(state); // {count: 1, company: 'google', age: 26}

// --------------------------------------

// let state = {
//   count: 0,
//   company: "adobe",
//   age: 26,
// };
// console.log(state); // {count: 0, company: 'adobe', age: 26}

// // Without Reducer
// function stateUpdater() {
//   state = { ...state, age: state.age + 10 };
// }
// stateUpdater();
// console.log(state); // {count: 0, company: 'adobe', age: 36}

// // With Reducer
// function reduxStateUpdater(state) {
//   return { ...state, age: state.age + 10 };
// }
// let newState = reduxStateUpdater(state);
// console.log(state); // {count: 0, company: 'adobe', age: 36}
// console.log(newState); // {count: 0, company: 'adobe', age: 46}

// -----------------------------------------

let state = {
  count: 0,
  company: "adobe",
  age: 26,
};
function reducer(state, action) {
  if (action.type === "age/increment") {
    return { ...state, age: state.age + 10 };
  } else if (action.type === "age/decrement") {
    return { ...state, age: state.age - 5 };
  } else if (action.type === "age/incrementBy") {
    return { ...state, age: state.age + action.payload };
  } else if (action.type === "age/decrementBy") {
    return { ...state, age: state.age - action.payload };
  }
  return state;
}

let newState1 = reducer(state, { type: "age/increment" });
console.log(newState1); // {count: 0, company: 'adobe', age: 36}
let newState2 = reducer(state, { type: "age/decrement" });
console.log(newState2); // {count: 0, company: 'adobe', age: 21}
let newState3 = reducer(state, { type: "age/incrementBy", payload: 10 });
console.log(newState3); // {count: 0, company: 'adobe', age: 36}
let newState4 = reducer(state, { type: "age/decrementBy", payload: 5 });
console.log(newState4); // {count: 0, company: 'adobe', age: 21}
