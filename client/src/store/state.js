import React, { useReducer } from 'react';
import Context from './context';
import Reducer from './reducer';
import {
//   USER_LOADED,
//   AUTH_ERROR,
//   LOGIN_SUCCESS,
//   LOGIN_FAIL,
  LOGOUT,
//   CLEAR_ERRORS
} from './types';

const State = props => {
  const initialState = {
    token: sessionStorage.getItem('token'),
    isAuthenticated: true,
    loading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

//   // Load User
//   const loadUser = async () => {

//     try {
//       const res = await axios.get('/api/auth');

//       dispatch({
//         type: USER_LOADED,
//         payload: res.data
//       });
//     } catch (err) {
//       dispatch({ type: AUTH_ERROR });
//     }
//   };


//   // Register User
//   const register = async formData => {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     };

//     try {
//       const res = await axios.post('/api/users', formData, config);

//       dispatch({
//         type: REGISTER_SUCCESS,
//         payload: res.data
//       });
//         loadUser()
    
//     } catch (err) {
//       dispatch({
//         type: REGISTER_FAIL,
//         payload: err.response.data.msg
//       });
//     }
//   };

//   // Login User
//   const login = async formData => {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     };

//     try {
//       const res = await axios.post('/api/auth', formData, config);

//       dispatch({
//         type: LOGIN_SUCCESS,
//         payload: res.data
//       });

//       loadUser();
//     } catch (err) {
//       dispatch({
//         type: LOGIN_FAIL,
//         payload: err.response.data.msg
//       });
//     }
//   };


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
        // login,
        logout
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;