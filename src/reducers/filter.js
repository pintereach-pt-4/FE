import { SET_FILTER } from '../actions/index';

const INIT = {
	filter: 'All',
	tabs: ['All', 'Life', 'Computer Science', 'Productivity', 'None', 'Other']
};

export default function filterReducer(state = INIT, action) {
	switch (action.type) {
		case SET_FILTER:
			return {
				...state,
				filter: action.payload
			};
		default:
			return state;
	}
}
