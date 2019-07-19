import {
	LOGIN,
	LOGIN_START,
	LOGIN_END,
	LOGIN_FAIL,
	LOGOUT,
	REGISTER,
	REGISTER_FAIL
} from '../actions/index';

const INIT = {
	log: false,
	user: {},
	error: null,
	message: ''
};

export default function authReducer(state = INIT, action) {
	switch (action.type) {
		case LOGIN_START: {
			return {
				...state,
				logging: true
			};
		}
		case LOGIN_END: {
			return {
				...state,
				logging: false
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
		default:
			return state;
	}
}
