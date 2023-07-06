import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodoAction(state,actions) {
      state.todos = [...state.todos, actions.payload]
    },
    delelteTodoAction(state,actions) {
      state.todos = state.todos.filter((todo) => todo.id !== actions.payload)
    },
  },
});

export const { addTodoAction, delelteTodoAction } = todosSlice.actions;
export default todosSlice.reducer;