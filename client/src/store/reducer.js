/* eslint-disable import/no-anonymous-default-export */
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
  } from './types';
  
  export default (state, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        // sessionStorage.setItem('token', action.payload.token);
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          loading: false,
          user: action.payload
        };
      case LOGIN_FAIL:
      case LOGOUT:
        // sessionStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
          user: null,
        };
      default:
        return state;
    }
  };