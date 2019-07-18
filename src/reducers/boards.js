// import {
// 	GET_BOARDS,
// 	GET_BOARDS_FAIL,
// 	GET_BOARDS_START,
// 	GET_BOARDS_END,
// 	ADD_BOARD,
// 	ADD_BOARD_FAIL,
// 	DELETE_BOARD,
// 	DELETE_BOARD_FAIL,
// 	EDIT_BOARD,
// 	EDIT_BOARD_FAIL
// } from '../actions/index';

// const INIT = {
// 	boards: [],
// 	loading: false
// };

// export default function boards(state = INIT, action) {
// 	switch (action.type) {
// 		case GET_BOARDS_START:
// 			return {
// 				...state,
// 				loading: true
// 			};
// 		case GET_BOARDS_END:
// 			return {
// 				...state,
// 				loading: false
// 			};
// 		case GET_BOARDS:
// 			return {
// 				...state,
// 				boards: action.payload
// 			};
// 		case GET_BOARDS_FAIL:
// 			return {
// 				...state,
// 				error: action.payload
// 			};
// 		case ADD_BOARD:
// 			return {
// 				...state,
// 				boards: [...state.boards, action.payload[0]]
// 			};
// 		case ADD_BOARD_FAIL:
// 			return {
// 				...state,
// 				error: action.payload
// 			};
// 		case DELETE_BOARD:
// 			const alteredBoards = state.boards.filter(
// 				board => board.id !== action.payload
// 			);
// 			return {
// 				...state,
// 				boards: alteredBoards
// 			};
// 		case DELETE_BOARD_FAIL:
// 			return {
// 				...state,
// 				error: action.payload
// 			};
// 		case EDIT_BOARD:
// 			return {
// 				...state
// 			};
// 		case EDIT_BOARD_FAIL:
// 			return {
// 				...state,
// 				error: action.payload
// 			};
// 		default:
// 			return;
// 	}
// }
