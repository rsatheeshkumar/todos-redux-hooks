import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./constants";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});
export const deleteTodo = (todoId) => ({
  type: DELETE_TODO,
  payload: todoId,
});
export const editTodo = (todo) => {
  console.log("from edits", todo);
  return {
    type: EDIT_TODO,
    payload: todo,
  };
};

// export const deleteTodos=()=>{
//     let newTodos=[...state];
//     newTodos=newTodos.filter(todo=>todo.id !== );
//     return (dispatch) => {
//             console.log(result.data);
//             dispatch(fetchUsersSuccess(users));
//           })
// }
