import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, UPDATE_STATUS } from "../actions";

const initialState = [];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      const filteredTodos = state.filter((todo) => todo.id !== action.payload);
      return filteredTodos;
    case UPDATE_TODO:
      let data = action.payload;
      const editedTodos = [];
      state.map((item) => {
        if (item.id === data.id) {
          item.id = data.id;
          item.todo = data.todo;
          item.completed = data.comleted;
        }

        editedTodos.push(item);
      });
      return editedTodos;
    case UPDATE_STATUS:
      let todos = [];
      state.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        todos.push(item);
      });
      return todos;
    default:
      return state;
  }
};
