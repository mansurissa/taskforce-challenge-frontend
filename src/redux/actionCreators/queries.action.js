import axios from 'axios';
import { BACKEND_URL } from '../../helpers/url';
import {
  CREATE_QUERY_FAILED,
  CREATE_QUERY_PENDING,
  CREATE_QUERY_SUCCESS,
  DELETE_QUERY_FAILED,
  DELETE_QUERY_PENDING,
  DELETE_QUERY_SUCCESS,
  FETCH_QUERIES_FAILED,
  FETCH_QUERIES_PENDING,
  FETCH_QUERIES_SUCCESS,
} from '../actionTypes/types';

const token = `Bearer ${localStorage.getItem('token')}`;

export const createQueryAction = (data) => async (dispatch) => {
  dispatch({ type: CREATE_QUERY_PENDING });
  try {
    const res = await axios.post(`${BACKEND_URL}/queries`, data);
    dispatch({ type: CREATE_QUERY_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: CREATE_QUERY_FAILED, payload: error });
  }
};

export const getQueriesAction = () => async (dispatch) => {
  dispatch({ type: FETCH_QUERIES_PENDING });
  try {
    const res = await axios.get(`${BACKEND_URL}/queries`, {
      headers: {
        auth: token,
      },
    });
    dispatch({ type: FETCH_QUERIES_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: FETCH_QUERIES_FAILED, payload: error });
  }
};

export const deleteQueryAction = (id) => async (dispatch) => {
  dispatch({ type: DELETE_QUERY_PENDING });
  try {
    const res = await axios.delete(`${BACKEND_URL}/queries/${id}`, {
      headers: {
        auth: token,
      },
    });
    dispatch({ type: DELETE_QUERY_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: DELETE_QUERY_FAILED, payload: error.response });
  }
};
