import { combineReducers } from 'redux';
import { totalCases, countryData } from './covidDataReducer';

const rootReducers = combineReducers({
  totalCases,
  countryData,
});

export default rootReducers;
