import initialState from "./initialState";
import { handleActions } from "redux-actions";
import { SEND_CREDENTIALS, RESPONSE_CREDENTIALS } from "../actions/actionTypes";
import get from "lodash/get";
const state = {
  challenge: false,
  register: true,
  waiting: false,
  auth_pending: false,
  register_pending: false
};

const handlers = {
  SEND_CREDENTIALS: (state = state) => {
    let newState = { waiting: true };
    return Object.assign({}, state, newState);
  },
  RESPONSE_CREDENTIALS: (state = state, action) => {
    let newState = {
      waiting: false,
      emailError: get(action.response, "error.email", ""),
      passwordError: get(action.response, "error.password", ""),
      credentialsSuccess: action.response.result === "success"
    };
    return Object.assign({}, state, newState);
  },
  RECEIVE_U2F_AUTH: (state = state, action) => {
    let newState = { auth_pending: action.challenge };
    return Object.assign({}, state, newState);
  }
};

export default handleActions(handlers, state);
