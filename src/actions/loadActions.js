import axios from 'axios';
import * as types from './actionTypes';
import API from '../utils/axios';

export function sendComicsSuccess(comics, isLoading) {
  return {type: types.LOAD_COMICS, comics, isLoading};
}

export function loadComics(isLoading) {
  const IRON_MAN_ID = "1009368";
  return dispatch => {
    return API.get(`characters/${IRON_MAN_ID}/comics?orderBy=focDate`).then(res => {
      dispatch(sendComicsSuccess(res.data.data.results, isLoading));
    });
  };
}
