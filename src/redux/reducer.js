import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // add todo
    addTodo: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //remove todo
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    // update todos
    updateTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    //completed todos
    completedTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo, completedTodo } =
  addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
