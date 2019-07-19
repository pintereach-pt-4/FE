import {
	LOGIN,
	LOGIN_START,
	LOGIN_END,
	LOGIN_FAIL,
	LOGOUT,
	REGISTER,
	REGISTER_FAIL,
	GET_BOARDS,
	GET_BOARDS_FAIL,
	GET_BOARDS_START,
	GET_BOARDS_END,
	ADD_BOARD,
	ADD_BOARD_FAIL,
	DELETE_BOARD,
	DELETE_BOARD_FAIL,
	EDIT_BOARD,
	EDIT_BOARD_FAIL,
	SET_FILTER
} from '../actions/index';

export const INITIAL_STATE = {
	error: null,
	loading: false,
	log: null,
	message: '',
	boards: [],
	user: {},
	filter: 'All',
	tabs: ['All', 'Life', 'Computer Science', 'Productivity', 'Other']
};

const reducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOGIN_START: {
			return {
				...state,
				log: false
			};
		}
		case LOGIN_END: {
			return {
				...state,
				log: true
			};
		}
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
		case LOGOUT:
			return {
				...state,
				user: {}
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
		case GET_BOARDS_START:
			return {
				...state,
				loading: true
			};
		case GET_BOARDS_END:
			return {
				...state,
				loading: false
			};
		case GET_BOARDS:
			return {
				...state,
				boards: action.payload
			};
		case GET_BOARDS_FAIL:
			return {
				...state,
				error: action.payload
			};
		case ADD_BOARD:
			return {
				...state,
				boards: [...state.boards, action.payload[0]]
			};
		case ADD_BOARD_FAIL:
			return {
				...state,
				error: action.payload
			};
		case DELETE_BOARD:
			const alteredBoards = state.boards.filter(
				board => board.id !== action.payload
			);
			return {
				...state,
				boards: alteredBoards
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
		case SET_FILTER:
			return {
				...state,
				filter: action.payload
			};
		default:
			return state;
	}
};

export default reducers;

// export default combineReducers({
// 	boards,
// 	auth,

// })
