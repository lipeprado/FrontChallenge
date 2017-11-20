import { combineReducers } from 'redux';
import comics from './comicsReducers';

const rootReducer = combineReducers({
  comics,
});

export default rootReducer;
