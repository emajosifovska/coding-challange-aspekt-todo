import { SET_STATUS } from "../actions";

export const STATUS_FILTER = {
  ALL: "all",
  COMPLETED: "completed",
  ACTIVE: "active",
};

const initialState = STATUS_FILTER.ALL;

export const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};
