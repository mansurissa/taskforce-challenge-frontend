import { combineReducers } from 'redux';
import { popupState } from './popup.reducer';
import {
  getUsersReducer,
  loginReducer,
  registerReducer,
} from '../reducers/auth.reducer';
import {
  createPostReducer,
  fetchAllPostsReducer,
  fetchOnePostReducer,
  subscribeReducer,
} from '../reducers/blog.reducer';
import { fetchAllQueriesReducer } from './queries.reducer';

const rootReducers = combineReducers({
  popupState,
  loginState: loginReducer,
  registerState: registerReducer,
  allPosts: fetchAllPostsReducer,
  onePost: fetchOnePostReducer,
  allQueries: fetchAllQueriesReducer,
  createPost: createPostReducer,
  allUsers: getUsersReducer,
  subscribed: subscribeReducer,
});

export default rootReducers;
