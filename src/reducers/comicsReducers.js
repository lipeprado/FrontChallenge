import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function (state = initialState.comics, action) {
  switch (action.type) {
  case types.LOAD_COMICS:
    return Object.assign({}, state, {
      dataComics: action.comics,
      loading: action.isLoading,
    });
  default:
    return state;
  }
}

