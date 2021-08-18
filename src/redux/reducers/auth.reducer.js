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

const initialState = {
  isLoggedIn: false,
  loading: false,
  user: null,
  error: null,
};

export const loginReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        user: action.payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

const initialStateRegister = {
  loading: false,
  user: null,
  error: null,
};

export const registerReducer = (state = initialStateRegister, action = {}) => {
  switch (action.type) {
    case REGISTER_PENDING:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case REGISTER_FAILED:
      return {
        loading: false,
        error: action.payload,
        user: null,
      };
    default:
      return state;
  }
};

const initialStateUsers = {
  loading: false,
  users: null,
  error: null,
};

export const getUsersReducer = (state = initialStateUsers, action = {}) => {
  switch (action.type) {
    case GET_USERS_PENDING:
      return { ...state, loading: true };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case GET_USERS_FAILED:
      return {
        loading: false,
        users: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

const initialStateDeleteUser = {
  loading: false,
  message: null,
  error: null,
};

export const deleteUserReducer = (
  state = initialStateDeleteUser,
  action = {},
) => {
  switch (action.type) {
    case DELETE_USER_PENDING:
      return { ...state, loading: true };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case DELETE_USER_FAILED:
      return {
        loading: false,
        message: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
