import {
  FETCH_POSTS_FAILED,
  FETCH_POSTS_PENDING,
  FETCH_POSTS_SUCCESS,
  FETCH_ONE_POST_FAILED,
  FETCH_ONE_POST_PENDING,
  FETCH_ONE_POST_SUCCESS,
  CREATE_POST_PENDING,
  CREATE_POST_SUCCESS,
  COMMENTING_SUCCESS,
  LIKE_SUCCESS,
  SUBSCRIBE_SUCCESS,
  SUBSCRIBE_FAILED,
} from '../actionTypes/types';

const initialStateCreate = {
  message: null,
  loading: false,
  erroMessage: null,
};

export const createPostReducer = (state = initialStateCreate, action = {}) => {
  switch (action.type) {
    case CREATE_POST_PENDING:
      return { ...state, loading: true };
    case CREATE_POST_SUCCESS:
      return { ...state, message: action.payload, loading: false };
    case FETCH_POSTS_FAILED:
      return { state, errorMessage: action.payload, loading: false };
    default:
      return state;
  }
};

const initialStatePosts = {
  posts: [],
  loading: false,
};
export const fetchAllPostsReducer = (
  state = initialStatePosts,
  action = {},
) => {
  switch (action.type) {
    case FETCH_POSTS_PENDING:
      return { ...state, loading: true };
    case FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload, loading: false };
    case FETCH_POSTS_FAILED:
      return { state, error: action.payload };
    default:
      return state;
  }
};

const initialStateOnePost = {
  post: {},
  loading: true,
  error: null,
  comments: [],
  likers: [],
};

export const fetchOnePostReducer = (
  state = initialStateOnePost,
  action = {},
) => {
  switch (action.type) {
    case COMMENTING_SUCCESS:
      return {
        ...state,
        comments: [action.payload, ...state.comments],
      };
    case LIKE_SUCCESS:
      return {
        ...state,
        likers: [action.payload, ...state.post.likers],
      };
    case FETCH_ONE_POST_PENDING:
      return { ...state, loading: true };
    case FETCH_ONE_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
        comments: action.payload.comments,
        loading: false,
      };
    case FETCH_ONE_POST_FAILED:
      return { state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const initialStateSubs = {
  msg: '',
  error: null,
  loading: false,
};

export const subscribeReducer = (state = initialStateSubs, action = {}) => {
  switch (action.type) {
    case SUBSCRIBE_SUCCESS:
      return {
        ...state,
        msg: action.payload,
        loading: false,
        error: null,
      };
    case SUBSCRIBE_FAILED:
      return {
        ...state,
        error: action.payload,
        msg: '',
        loading: false,
      };
    default:
      return state;
  }
};
