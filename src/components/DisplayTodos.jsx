import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodo,
  removeTodo,
  updateTodo,
  completedTodo,
} from "../redux/reducer";
import TodoItem from "./TodoItem";

const DisplayTodos = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <div className="display-todos">
      <div className="buttons">
        <button onClick={() => setSort("active")}>Active</button>
        <button onClick={() => setSort("completed")}>Completed</button>
        <button onClick={() => setSort("all")}>All</button>
      </div>
      <ul>
        {props.todos.length > 0 && sort === "active"
          ? props.todos.map((todo) => {
              return (
                todo.completed === false && (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completedTodo={props.completedTodo}
                  />
                )
              );
            })
          : null}
        {/* completed todos  */}
        {props.todos.length > 0 && sort === "completed"
          ? props.todos.map((todo) => {
              return (
                todo.completed === true && (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completedTodo={props.completedTodo}
                  />
                )
              );
            })
          : null}
        {/*ALL todos  */}
        {props.todos.length > 0 && sort === "all"
          ? props.todos.map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completedTodo={props.completedTodo}
                />
              );
            })
          : null}
      </ul>
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
    removeTodo: (id) => dispatch(removeTodo(id)),
    updateTodo: (obj) => dispatch(updateTodo(obj)),
    completedTodo: (id) => dispatch(completedTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
