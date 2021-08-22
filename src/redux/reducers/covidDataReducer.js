import {
  ALLCONTINENTS_FAILED,
  ALLCONTINENTS_PENDING,
  ALLCONTINENTS_SUCESS,
  COUNTRIES_LIST_FAIL,
  COUNTRIES_LIST_PENDIG,
  COUNTRIES_LIST_SUCCESS,
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

const initialStateCountry = {
  loading: false,
  countryData: {},
  error: null,
};
export const countryData = (state = initialStateCountry, action = {}) => {
  switch (action.type) {
    case COUNTRIES_LIST_PENDIG:
      return { ...state, loading: true };
    case COUNTRIES_LIST_SUCCESS:
      return {
        loading: false,
        countryData: action.payload,
        error: null,
      };
    case COUNTRIES_LIST_FAIL:
      return { loading: false, countryData: '', error: action.payload };
    default:
      return state;
  }
};
