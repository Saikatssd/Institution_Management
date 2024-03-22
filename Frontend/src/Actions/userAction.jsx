import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_RESET,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_RESET,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  NEW_PASSWORD_REQUEST,
  NEW_PASSWORD_SUCCESS,
  NEW_PASSWORD_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  CLEAR_ERRORS,
} from "../Constants/userConstant";

import Cookies from 'js-cookie';
// action for login
export const login = (fields, role) => async (dispatch) => {
  // console.log("Login action started");
  try {
    dispatch({ type: LOGIN_REQUEST, });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `http://localhost:5000/${role}Login`,
      fields,
      config
    );
    // console.log("Login success:", data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.user,
    });
  }
  catch (error) {
    // console.error("Login Failed"+error);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};




//register user actions

export const register = (fields, role) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST, });
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.post(`http://localhost:5000/${role}Reg`, fields, config);
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data.user,
    });
    return data.data.user;
  } catch (error) {
    if (error.response) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: 'An unexpected error occurred'
      });
    }
  }
};

//load user action

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_USER_REQUEST,
    });

    const { data } = await axios.get("http://localhost:4000/api/v1/users/me");

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: LOAD_USER_FAIL,
        payload: error.response.data.message,
      });
    } else if (error.request) {
      // The request was made but no response was received
      // This can happen if the server is down or there's a network issue
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
  }
};

//update profile actions
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST, });
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const { data } = await axios.put(
      "http://localhost:4000/api/v1/users/me/update",
      userData,
      config
    );
    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

//update password action

export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST, });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.put(
      "http://localhost:4000/api/v1/users/password/update",
      passwords,
      config
    );
    dispatch({
      type: UPDATE_PASSWORD_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

//forgot password action

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST, });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.post(
      "http://localhost:4000/api/v1/users/forgetPassword",
      email,
      config
    );
    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// reset password action

export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PASSWORD_REQUEST, });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.patch(
      `http://localhost:4000/api/v1/users/resetPassword/${token}`,
      passwords,
      config
    );
    dispatch({
      type: NEW_PASSWORD_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

//logout actions

export const logout = (role) => async (dispatch) => {
  try {
    await axios.get(`http://localhost:5000/${role}Logout`);

    Cookies.remove('token');

    dispatch({ type: LOGOUT_SUCCESS, });

  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.response.data.message,
    });
  }
};

//clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS, });
};