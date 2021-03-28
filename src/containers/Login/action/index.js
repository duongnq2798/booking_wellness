import {SET_EMAIL, SET_PASSWORD} from '../reducer';

export const setEmailLocal = payload => ({
  type: SET_EMAIL,
  payload,
});

export const setPasswordLocal = payload => ({
  type: SET_PASSWORD,
  payload,
});
