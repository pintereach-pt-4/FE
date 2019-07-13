import {
  LOGIN,
  LOGIN_FAIL,
  REGISTER,
  REGISTER_FAIL,
  GET_BOARDS,
  GET_BOARDS_FAIL
} from "../actions/index";

const INITIAL_STATE = {
  error: null,
  message: "",
  allBoards: []
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
    case GET_BOARDS:
      return {
        ...state,
        allBoards: action.payload
      };
    case GET_BOARDS_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return;
  }
};

export default reducers;
