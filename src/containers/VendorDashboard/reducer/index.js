import moment from 'moment';

const SHOW_EVENT_DETAIL = 'SHOW_EVENT_DETAIL';
const GET_EVENT_DETAIL = 'GET_EVENT_DETAIL'; // setEventItem
const SET_REASON_REJECT = 'SET_REASON_REJECT';
const SHOW_REASON_REJECT = 'SHOW_REASON_REJECT';
const SET_DATE_FIRST = 'SET_DATE_FIRST';
const SET_DATE_SECOND = 'SET_DATE_TWO';
const SET_DATE_THIRD = 'SET_DATE_THIRD';
const SHOW_DATE_FIRST = 'SHOW_DATE_FIRST';
const SHOW_DATE_SECOND = 'SHOW_DATE_TWO';
const SHOW_DATE_THIRD = 'SHOW_DATE_THIRD';
const SHOW_DATE_GROUP = 'SHOW_DATE_GROUP';
const date = new Date();
const initState = {
  isShowEvent: false,
  dataEventDetail: {},
  reason: '',
  isReason: false,
  dateFirst: date,
  dateSecond: date,
  dateThird: date,
  isDateFirst: false,
  isDateSecond: false,
  isDateThird: false,
  isDateGroup: false,
};

const vendorReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_EVENT_DETAIL:
      return {
        ...state,
        isShowEvent: !state.isShowEvent,
        // isDateFirst: false,
        // isDateSecond: false,
        // isDateThird: false,
      };
    case GET_EVENT_DETAIL:
      return {
        ...state,
        dataEventDetail: action.payload,
      };
    case SET_REASON_REJECT:
      return {
        ...state,
        reason: action.payload,
      };
    case SHOW_REASON_REJECT:
      return {
        ...state,
        isReason: !state.isReason,
        isShowEvent: false,
      };
    case SET_DATE_FIRST:
      return {
        ...state,
        dateFirst: state.dateFirst,
      };
    case SET_DATE_SECOND:
      return {
        ...state,
        dateSecond: state.dateSecond,
      };
    case SET_DATE_THIRD:
      return {
        ...state,
        dateThird: state.dateThird,
      };
    case SHOW_DATE_FIRST:
      return {
        ...state,
        isDateFirst: !state.isDateFirst,
      };
    case SHOW_DATE_SECOND:
      return {
        ...state,
        isDateSecond: !state.isDateSecond,
      };
    case SHOW_DATE_THIRD:
      return {
        ...state,
        isDateThird: !state.isDateThird,
      };
    case SHOW_DATE_GROUP:
      return {
        ...state,
        isDateGroup: !state.isDateGroup,
      };
    default:
      return state;
  }
};

export {
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
  initState,
  vendorReducer,
};
