import authReducer from './auth';
import boardsReducer from './boards';
import filterReducer from './filter';
import { combineReducers } from 'redux';

export default combineReducers({
	Boards: boardsReducer,
	Auth: authReducer,
	Filter: filterReducer
});
