import api from "../api";

export const LOGIN = `LOGIN`;
export const LOGIN_FAIL = `LOGIN_FAIL`;
export const login = credentials => dispatch => {
  api
    .post("login", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err });
    });
};

export const REGISTER = `REGISTER`;
export const REGISTER_FAIL = `REGISTER_FAIL`;
export const register = credentials => dispatch => {
  api
    .post("register", credentials)
    .then(res => {
      console.log(res);
      dispatch({ type: REGISTER, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAIL, payload: err });
    });
};
