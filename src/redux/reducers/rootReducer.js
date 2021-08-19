import { combineReducers } from 'redux';
import { totalCases } from './covidDataReducer';

const rootReducers = combineReducers({
  totalCases: totalCases,
});

export default rootReducers;
