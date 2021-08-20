import {
  ALLCONTINENTS_FAILED,
  ALLCONTINENTS_PENDING,
  ALLCONTINENTS_SUCESS,
} from '../actionTypes/types';

const initialStateAllContinents = {
  loading: false,
  total: {},
  allContintents: [],
  error: null,
};

export const totalCases = (state = initialStateAllContinents, action = {}) => {
  switch (action.type) {
    case ALLCONTINENTS_PENDING:
      return { ...state, loading: true };
    case ALLCONTINENTS_SUCESS:
      return {
        loading: false,
        allContintents: action.payload.data,
        total: action.payload.total,
        error: null,
      };
    case ALLCONTINENTS_FAILED:
      return { loading: false, allContintents: '', error: action.payload };
    default:
      return state;
  }
};
