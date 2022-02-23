import React, { useReducer } from 'react';
import Context from './context';
import Reducer from './reducer';
import {
//   USER_LOADED,
//   AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
//   CLEAR_ERRORS
} from './types';

const State = props => {
  const initialState = {
    token: sessionStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
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

  // Clear Errors
//   const clearErrors = () => dispatch({type:CLEAR_ERRORS})


  return (
    <Context.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        // register,
        // clearErrors,
        // loadUser,
        loginSuccess,
        loginError,
        logout
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;