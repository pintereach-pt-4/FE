import {
  LOGIN,
  LOGIN_FAIL,
  REGISTER,
  REGISTER_FAIL,
  GET_BOARDS,
  GET_BOARDS_FAIL,
  ADD_BOARD,
  ADD_BOARD_FAIL,
  DELETE_BOARD,
  DELETE_BOARD_FAIL,
  EDIT_BOARD,
  EDIT_BOARD_FAIL
} from "../actions/index";

const INITIAL_STATE = {
  error: null,
  message: "",
  allBoards: [],
  user: {}
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        message: action.payload.message,
        user: action.payload.user
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
    case ADD_BOARD:
      return {
        ...state,
        allBoards: [...state.allBoards, action.payload[0]]
      };
    case ADD_BOARD_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case DELETE_BOARD:
      const alteredBoards = state.allBoards.filter(
        board => board.id !== action.payload
      );
      return {
        ...state,
        allBoards: alteredBoards
      };
    case DELETE_BOARD_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case EDIT_BOARD:
      return {
        ...state
      };
    case EDIT_BOARD_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return;
  }
};

export default reducers;
