import { LOGIN, LOGIN_FAIL, REGISTER, REGISTER_FAIL } from "../actions/index";

const INITIAL_STATE = {
  error: null,
  message: ""
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        message: action.payload.message
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case REGISTER:
      return {
        ...state
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return;
  }
};

export default reducers;
