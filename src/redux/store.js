import { createStore, combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { statusReducer } from "./reducers/statusReducer";

const rootReducer = combineReducers({
  todoReducer,
  statusReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
