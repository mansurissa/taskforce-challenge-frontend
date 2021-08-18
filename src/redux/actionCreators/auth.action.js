import axios from 'axios';
import {
  DELETE_USER_FAILED,
  DELETE_USER_PENDING,
  DELETE_USER_SUCCESS,
  GET_USERS_FAILED,
  GET_USERS_PENDING,
  GET_USERS_SUCCESS,
  LOGIN_FAILED,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_PENDING,
  REGISTER_SUCCESS,
} from '../actionTypes/types';
import { BACKEND_URL } from '../../helpers/url';

export const loginAction = (data) => async (dispatch) => {
  dispatch({ type: LOGIN_PENDING });
  try {
    const res = await axios.post(`${BACKEND_URL}/users/signin`, data);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.data,
    });
    if (res.data.data) {
      localStorage.setItem('token', res.data.data.token);
      localStorage.setItem('profile', JSON.stringify(res.data.data.user));
    }
  } catch (error) {
    console.log(error);

    dispatch({
      type: LOGIN_FAILED,
      payload: error.response.data.message,
    });
  }
};

export const registerAction = (data) => async (dispatch) => {
  dispatch({ type: REGISTER_PENDING });
  try {
    const res = await axios.post(`${BACKEND_URL}/users`, data);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAILED,
      payload: error.res.data.message,
    });
  }
};

const token = `Bearer ${localStorage.getItem('token')}`;

export const fetchUsersAction = () => async (dispatch) => {
  dispatch({ type: GET_USERS_PENDING });
  try {
    const res = await axios.get(`${BACKEND_URL}/users`, {
      headers: { auth: token },
    });

    dispatch({
      type: GET_USERS_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_USERS_FAILED,
      payload: error.response,
    });
  }
};

export const deleteUserAction = (userId) => async (dispatch) => {
  dispatch({ type: DELETE_USER_PENDING });
  try {
    const res = await axios.delete(`${BACKEND_URL}/users/${userId}`, {
      headers: { auth: token },
    });

    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: res.data.message,
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAILED,
      payload: error.response.message,
    });
  }
};
