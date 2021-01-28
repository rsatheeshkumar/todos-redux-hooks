import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./constants";

const INITIAL_STATE = [
  {
    id: 1,
    name: "one",
  },
  {
    id: 2,
    name: "two",
  },
  {
    id: 3,
    name: "Three",
  },
];

export const reducer = (state = INITIAL_STATE, action) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state];
    //   newTodos = [...state];
    //   newTodos = newTodos.push(action.payload);
    //   return newTodos;
    case DELETE_TODO:
      newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
      return newTodos;
    case EDIT_TODO:
      const initialState = [...state];
      const onAction = action.payload;
      const index = initialState.findIndex((num) => num.id === onAction.id);
      console.log(index);
      if (index !== -1) {
        initialState.splice(index, 1, onAction);
      }

      return initialState;
    default:
      return state;
  }
};

// const newList = initialState.map((el) => {
//   if (initialState === onAction) {
//     return onAction;
//   } else {
//     return initialState;
//   }
// });
