export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const UPDATE_STATUS = "UPDATE_STATUS";
export const SET_STATUS = "SET_STATUS";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

export const updateStatus = (payload) => {
  return {
    type: UPDATE_STATUS,
    payload,
  };
};

export const setStatus = (filter) => {
  return {
    type: SET_STATUS,
    payload: { filter },
  };
};
