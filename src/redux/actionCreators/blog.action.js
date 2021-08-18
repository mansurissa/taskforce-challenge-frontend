import axios from 'axios';
import { BACKEND_URL } from '../../helpers/url';
import {
  FETCH_ONE_POST_FAILED,
  FETCH_ONE_POST_PENDING,
  FETCH_ONE_POST_SUCCESS,
  FETCH_POSTS_FAILED,
  FETCH_POSTS_PENDING,
  FETCH_POSTS_SUCCESS,
  FETCH_SUBS_FAILED,
  FETCH_SUBS_PENDING,
  FETCH_SUBS_SUCCESS,
  CREATE_POST_PENDING,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILED,
  SUBSCRIBE_PENDING,
  SUBSCRIBE_SUCCESS,
  SUBSCRIBE_FAILED,
  UNSUBSCRIBE_PENDING,
  UNSUBSCRIBE_SUCCESS,
  UNSUBSCRIBE_FAILED,
  UPDATE_POST_PENDING,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILED,
  DELETE_POST_PENDING,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILED,
  COMMENTING_PENDING,
  COMMENTING_SUCCESS,
  COMMENTING_FAILED,
  LIKE_PENDING,
  LIKE_SUCCESS,
  LIKE_FAILED,
} from '../actionTypes/types';

const token = `Bearer ${localStorage.getItem('token')}`;

export const createPostAction = (data) => async (dispatch) => {
  dispatch({ type: CREATE_POST_PENDING });
  try {
    const res = await axios.post(`${BACKEND_URL}/blog`, data, {
      headers: {
        auth: token,
      },
    });
    dispatch({ type: CREATE_POST_SUCCESS, payload: res.data.message });
  } catch (error) {
    dispatch({ type: CREATE_POST_FAILED, payload: error.response });
  }
};

export const fetchPostsAction = () => async (dispatch) => {
  dispatch({ type: FETCH_POSTS_PENDING });
  try {
    const res = await axios.get(`${BACKEND_URL}/blog`);
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: FETCH_POSTS_FAILED, payload: error });
  }
};

export const updatePostAction = (postId, data) => async (dispatch) => {
  dispatch({ type: UPDATE_POST_PENDING });
  try {
    const res = await axios.patch(`${BACKEND_URL}/blog/${postId}`, data, {
      headers: { auth: token },
    });
    dispatch({ type: UPDATE_POST_SUCCESS, payload: res.data.message });
  } catch (error) {
    dispatch({ type: UPDATE_POST_FAILED, payload: error });
  }
};

export const fetchOnePostAction = (postId) => async (dispatch) => {
  dispatch({ type: FETCH_ONE_POST_PENDING });
  try {
    const res = await axios.get(`${BACKEND_URL}/blog/${postId}`);
    dispatch({ type: FETCH_ONE_POST_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: FETCH_ONE_POST_FAILED, payload: error });
  }
};

export const commentAction = (postId, comment) => async (dispatch) => {
  dispatch({ type: COMMENTING_PENDING });
  try {
    const res = await axios.post(
      `${BACKEND_URL}/blog/${postId}/comment`,
      comment,
      {
        headers: {
          auth: token,
        },
      },
    );
    dispatch({ type: COMMENTING_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: COMMENTING_FAILED, payload: error });
  }
};

export const deletePostAction = (id) => async (dispatch) => {
  dispatch({ type: DELETE_POST_PENDING });
  try {
    const res = await axios.delete(`${BACKEND_URL}/blog/${id}`, {
      headers: {
        auth: token,
      },
    });
    dispatch({ type: DELETE_POST_SUCCESS, payload: res.data.message });
  } catch (error) {
    dispatch({ type: DELETE_POST_FAILED, payload: error.response });
  }
};

export const subscribeAction = (email) => async (dispatch) => {
  dispatch({ type: SUBSCRIBE_PENDING });
  try {
    const res = await axios.post(`${BACKEND_URL}/blog/subscribe`, { email });
    dispatch({ type: SUBSCRIBE_SUCCESS, payload: res.data.message });
  } catch (error) {
    dispatch({ type: SUBSCRIBE_FAILED, payload: error.response.data.message });
  }
};

export const fetchSubsAction = () => async (dispatch) => {
  dispatch({ type: FETCH_SUBS_PENDING });
  try {
    const res = await axios.get(`${BACKEND_URL}/blog/subscribe`, {
      headers: {
        auth: token,
      },
    });
    dispatch({ type: FETCH_SUBS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_SUBS_FAILED, payload: error });
  }
};

export const likeAction = (id) => async (dispatch) => {
  dispatch({ type: LIKE_PENDING });
  try {
    const res = await axios.put(
      `${BACKEND_URL}/blog/like/${id}`,
      {},
      { headers: { auth: token } },
    );
    dispatch({ type: LIKE_SUCCESS, payload: res.data.data.liker });
  } catch (error) {
    dispatch({ type: LIKE_FAILED, payload: error });
  }
};

export const unsubscribeAction = (email) => async (dispatch) => {
  dispatch({ type: UNSUBSCRIBE_PENDING });
  try {
    const res = await axios.post(`${BACKEND_URL}/blog/unsubscribe`, { email });
    dispatch({ type: UNSUBSCRIBE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: UNSUBSCRIBE_FAILED, payload: error });
  }
};
