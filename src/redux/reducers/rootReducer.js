import { combineReducers } from 'redux';
import { totalCases } from './covidDataReducer';

const rootReducers = combineReducers({
  totalCases,
});

export default rootReducers;
