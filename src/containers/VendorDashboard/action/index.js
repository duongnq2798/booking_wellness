import {
  SHOW_EVENT_DETAIL,
  GET_EVENT_DETAIL,
  SET_REASON_REJECT,
  SHOW_REASON_REJECT,
  SET_DATE_FIRST,
  SET_DATE_SECOND,
  SET_DATE_THIRD,
  SHOW_DATE_FIRST,
  SHOW_DATE_SECOND,
  SHOW_DATE_THIRD,
  SHOW_DATE_GROUP,
} from '../reducer';

export const onShowEventDetail = payload => ({
  type: SHOW_EVENT_DETAIL,
  payload,
});

export const getEventDetail = payload => ({
  type: GET_EVENT_DETAIL,
  payload,
});

export const setReasonReject = payload => ({
  type: SET_REASON_REJECT,
  payload,
});

export const onShowReasonReject = payload => ({
  type: SHOW_REASON_REJECT,
  payload,
});

export const setDateFirst = payload => ({
  type: SET_DATE_FIRST,
  payload,
});

export const setDateSecond = payload => ({
  type: SET_DATE_SECOND,
  payload,
});

export const setDateThird = payload => ({
  type: SET_DATE_THIRD,
  payload,
});

export const onShowDateFirst = () => ({
  type: SHOW_DATE_FIRST,
});

export const onShowDateSecond = () => ({
  type: SHOW_DATE_SECOND,
});

export const onShowDateThird = () => ({
  type: SHOW_DATE_THIRD,
});

export const onShowDateGroup = () => ({
  type: SHOW_DATE_GROUP,
});
