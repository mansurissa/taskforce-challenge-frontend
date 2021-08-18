import {
  FETCH_QUERIES_FAILED,
  FETCH_QUERIES_PENDING,
  FETCH_QUERIES_SUCCESS,
} from '../actionTypes/types';

const initialStateQueries = {
  queries: [],
  error: null,
  loading: false,
};

export const fetchAllQueriesReducer = (
  state = initialStateQueries,
  action = {},
) => {
  switch (action.type) {
    case FETCH_QUERIES_PENDING:
      return { ...state, loading: true };
    case FETCH_QUERIES_SUCCESS:
      return { ...state, queries: action.payload, loading: false };
    case FETCH_QUERIES_FAILED:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
