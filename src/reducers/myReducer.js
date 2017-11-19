import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function (state = initialState.users, action) {
  switch (action.type) {
  case types.ADD_USER:
    return [...state, action.user];
  case types.REMOVE_USER:
    return removeItem(state, action.user);
  default:
    return state;
  }
}

export function removeItem(state, item){
  let NewList = state.filter(user => user !== item);
  return NewList;
}