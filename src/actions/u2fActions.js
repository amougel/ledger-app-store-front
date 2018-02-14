import * as types from "./actionTypes";

const url = () => {
  return "www.url.com";
};

export const receiveChallenge = json => {
  return { type: types.GET_CHALLENGE, challenge: json.challenge };
};

export const fetchStuff = () => {
  return async dispatch => {
    let res = await fetch(url(), {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        "x-api-key": apiKey,
        Accept: "application/json"
      }
    });
    let data = await res.json();
    return dispatch(receiveChallenge(data));
  };
};
