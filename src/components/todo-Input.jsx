import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/action";

import { v4 as uuid } from "uuid";

const AddTodo = ({ addTodo }) => {
  const [name, setName] = useState(" ");

  const object = { id: uuid(), name: name };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <div className="row w-0 m-2">
        <input
          type="text"
          name="text"
          className="col form-control"
          placeholder="Add-Todo"
          value={name}
          onChange={handleChange}
        />
        <button
          className="col btn btn-secondary mx-2"
          type="submit"
          value="submit"
          onClick={() => {
            addTodo(object);
            setName(" ");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (object) => dispatch(addTodo(object)),
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);
