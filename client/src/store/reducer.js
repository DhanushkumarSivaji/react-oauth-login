/* eslint-disable import/no-anonymous-default-export */
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SHOW_LOADER,
} from './types';

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      sessionStorage.setItem('isAuthenticated', true);
      sessionStorage.setItem('user',JSON.stringify(action.payload))
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        errror: false,
        user: action.payload
      };
    case LOGIN_FAIL:
      sessionStorage.clear();
      return {
        ...state,
        error: action.payload,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    case LOGOUT:
      sessionStorage.clear();
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        errror: false
      };
    case SHOW_LOADER:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state;
  }
};