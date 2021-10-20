import React, { useRef } from "react";

const TodoItem = (props) => {
  const { todo, updateTodo, removeTodo, completedTodo } = props;

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
        <button onClick={() => changeFocus()}> Edit </button>
        <button onClick={() => completedTodo(todo.id)}>Complete</button>
        <button onClick={() => removeTodo({ id: todo.id })}>Delete</button>
      </div>
      {todo.completed && <span className="completed">Completed</span>}
    </li>
  );
};

export default TodoItem;
