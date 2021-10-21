import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/reducer";
import { GoPlus } from "react-icons/go";

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") alert("Please enter a todo");
    else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };

  return (
    <div className="addTodos">
      <input
        type="text"
        className="todo-input"
        value={todo}
        onChange={(e) => handleChange(e)}
      />
      <button className="add-btn" onClick={() => add()}>
        <GoPlus />
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
    addTodo: (obj) => dispatch(addTodo(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
