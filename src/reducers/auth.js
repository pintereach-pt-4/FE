import {
	LOGIN,
	LOGIN_START,
	LOGIN_END,
	LOGIN_FAIL,
	LOGOUT,
	REGISTER,
	REGISTER_FAIL,
	REGISTER_START,
	REGISTER_END
} from '../actions/index';

const INIT = {
	logging: false,
	user: {},
	error: null,
	message: '',
	registering: false,
	status: ""
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
				logging: false,
				message: '',
				status:""
			};
		}
		case LOGIN:
			return {
				...state,
				message: 'Success',
				user: action.payload.user,
				status: "success",
				logging: false,
			};
		case LOGIN_FAIL:
			return {
				...state,
				message: "Invalid Credentials",
				status: 'error',
				logging: false
			};
		case LOGOUT:
			return {
				...state,
				user: {}
			};
		case REGISTER_START:
			return {
				...state,
				registering: true
			};
		case REGISTER:
			return {
				...state,
				registering: false,
				message:'Success'
			};
			case REGISTER_FAIL:
				return {
					...state,
					error: action.payload,
					registering: false,
					message:'Error'
			};
			case REGISTER_END:
				return {
					...state,
					message:"",
					registering: false,
			}
		default:
			return state;
	}
}
