import React, { useRef } from "react";
import { FiEdit2 } from "react-icons/fi";
import { IoCheckmarkDone, IoCloseOutline } from "react-icons/io5";

const TodoItem = (props) => {
  const { todo, removeTodo, updateTodo, completedTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    //handle enter key
    if (e.keyCode === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <li key={todo.id} className="card">
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={todo.item}
        onKeyPress={(e) => update(todo.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <button onClick={() => changeFocus()}>
          <FiEdit2 />
        </button>
        {todo.completed === false && (
          <button
            style={{ color: "green" }}
            onClick={() => completedTodo(todo.id)}
          >
            <IoCheckmarkDone />
          </button>
        )}
        <button style={{ color: "red" }} onClick={() => removeTodo(todo.id)}>
          <IoCloseOutline />
        </button>
      </div>
      {todo.completed && <span className="completed">Completed</span>}
    </li>
  );
};

export default TodoItem;
