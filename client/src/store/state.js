import React, { useReducer } from 'react';
import Context from './context';
import Reducer from './reducer';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SHOW_LOADER,
  HIDE_LOADER
} from './types';

const State = props => {
  const initialState = {
    token: sessionStorage.getItem('token'),
    isAuthenticated: null,
    loading: false,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  
  // Login User
  const loginSuccess = (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data
      });
  };

  const loginError = (err) => {
    dispatch({
      type: LOGIN_FAIL,
      payload: err
    });
  }

  // Logout
  const logout = () => dispatch({ type: LOGOUT });

  const showLoader = () => {
    dispatch({
      type: SHOW_LOADER,
      payload: true
    });
  }

  const hideLoader = () => {
    dispatch({
      type: HIDE_LOADER,
      payload: false
    });
  }

  return (
    <Context.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        loginSuccess,
        loginError,
        logout,
        showLoader,
        hideLoader
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;