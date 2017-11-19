import { combineReducers } from 'redux';
import users from './myReducer';

const rootReducer = combineReducers({
  users,
});

export default rootReducer;
