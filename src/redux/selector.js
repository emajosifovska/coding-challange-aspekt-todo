import { STATUS_FILTER } from "./reducers/statusReducer";

export const getTodosByStatus = (store, status) => {
  switch (status) {
    case STATUS_FILTER.COMPLETED:
      return store.todoReducer.filter((todo) => todo.completed);
    case STATUS_FILTER.ACTIVE:
      return store.todoReducer.filter((todo) => !todo.completed);
    default:
      return store.todoReducer;
  }
};
