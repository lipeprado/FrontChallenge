import * as types from './actionTypes';
import axios from 'axios';

export function sendSomethingSuccess(user) {
  return {
    type: types.ADD_USER, 
    user
  };
}

export function removeUserSuccess(user) {
  return {
    type: types.REMOVE_USER, 
    user
  };
}

export function sendUsers(user) {
  return dispatch => {
    dispatch(sendSomethingSuccess(user));
  };
}

export function removeUser(user) {
  return dispatch => {
    dispatch(removeUserSuccess(user));
  };
}