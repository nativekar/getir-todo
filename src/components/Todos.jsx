import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodo,
  removeTodo,
  updateTodo,
  completedTodo,
} from "../redux/reducer";

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div className="addTodos">
      <input
        type="text"
        className="todo-input"
        placeholder="Add Todos"
        onChange={(e) => handleChange(e)}
      />
      <button
        className="add-btn"
        onClick={() =>
          props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
          })
        }
      >
        Add
      </button>
      <br />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    removeTodo: (id) => dispatch(removeTodo(id)),
    updateTodo: (todo) => dispatch(updateTodo(todo)),
    completedTodo: (id) => dispatch(completedTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
