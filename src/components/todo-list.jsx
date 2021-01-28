import React from "react";
import { connect } from "react-redux";
import TodoItem from "./todo-item";

function TodoList({ todos }) {
  return (
    <div className="my-5">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    todos: state.todo,
  };
};
export default connect(mapStateToProps)(TodoList);
