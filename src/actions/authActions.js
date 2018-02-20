import * as types from "./actionTypes";
const url = () => {
  return "www.url.com";
};

function sleep() {
  return new Promise(resolve => {
    setTimeout(() => resolve(), 2000);
  });
}

export const sendCredentials = (email, pw) => {
  return async dispatch => {
    dispatch({
      type: types.SEND_CREDENTIALS
    });
    await sleep();
    dispatch({
      type: types.RESPONSE_CREDENTIALS,
      response: {
        result: "error",
        challenge: "totochallenge",
        register: true,
        error: {
          email: "wrong email"
        }
      }
    });
    dispatch({
      type: types.RECEIVE_U2F_AUTH,
      challenge: "testChallenge"
    });
    window.u2f.register(
      "aaaa",
      "fd4262bdc6f348832785920252b2e47df85dd1abb90882ae74460c16be7948bb",

      "6a40f6615e6f43d11a6d60d8dd0fde75a898834a202f49b758c0c36a1a24d026e70e4a1501d2d7aa14aff55cfca5779cc07be75f6281f58cce1c08e568042edc",
      function(response) {
        console.log("response", response);
      }
    );
    await sleep();
    /*window.u2f.sign({
      version: "U2F_V2",
      challenge:
        "fd4262bdc6f348832785920252b2e47df85dd1abb90882ae74460c16be7948bb",
      handles: [
        "6a40f6615e6f43d11a6d60d8dd0fde75a898834a202f49b758c0c36a1a24d026e70e4a1501d2d7aa14aff55cfca5779cc07be75f6281f58cce1c08e568042edc"
      ],
      appId: "aaaa"
  });*/
  };
};
