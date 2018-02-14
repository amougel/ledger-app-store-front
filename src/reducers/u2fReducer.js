import initialState from "./initialState";
import { handleActions } from "redux-actions";
import { GET_CHALLENGE } from "../actions/actionTypes";

const state = {
  currentDevice: null
};

const handlers = {
  GET_CHALLENGE: (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case GET_CHALLENGE:
        console.log("GET_CHALLENGE Action");
        return action;
      default:
        return state;
    }
  }
};

export default handleActions(handlers, state);
