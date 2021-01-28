import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteTodo, editTodo } from "../redux/action";

const TodoItem = ({ todo, deleteTodo, onEditTodo }) => {
  const ids = todo.id;
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);

  return (
    <div>
      <div className="row mx-2">
        <div>{todo.id.length > 1 ? todo.id[0] : todo.id}</div>
        <div className="col">
          {editable ? (
            <input
              type="text"
              className="form-control"
              placeholder={todo.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <h4>{todo.name}</h4>
          )}
        </div>
        <button
          onClick={() => {
            if (editable) {
              setName(todo.name);
              let edits = { ...todo, name: name };
              onEditTodo(edits);
            }
            setEditable(!editable);
          }}
          className="btn btn-primary m-2"
        >
          {editable ? "Update" : "Edit"}
        </button>
        <button className="btn btn-danger m-2" onClick={() => deleteTodo(ids)}>
          Delete
        </button>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (ids) => dispatch(deleteTodo(ids)),
    onEditTodo: (edits) => dispatch(editTodo(edits)),
  };
};

export default connect(null, mapDispatchToProps)(TodoItem);
