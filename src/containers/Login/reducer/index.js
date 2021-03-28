import {accountRole} from '../../../helpers/Constants';

const SET_EMAIL = 'SET_EMAIL';
const SET_PASSWORD = 'SET_PASSWORD';
const LOGIN = 'LOGIN';

const initState = {
  email: '',
  password: '',
  isNavigateHrDashBoard: false,
  isNavigateVendorDashBoard: false,
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    // write logic here...............
    default:
      return state;
  }
};

export {SET_EMAIL, SET_PASSWORD, initState, loginReducer};
