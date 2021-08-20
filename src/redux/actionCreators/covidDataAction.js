import axios from 'axios';
import { BACKEND_URL } from '../../helpers/url';
import {
  ALLCONTINENTS_FAILED,
  ALLCONTINENTS_PENDING,
  ALLCONTINENTS_SUCESS,
} from '../actionTypes/types';
import { totalCases } from '../reducers/covidDataReducer';

export const fetchAllContinentsData = () => async dispatch => {
  dispatch({ type: ALLCONTINENTS_PENDING });
  try {
    const res = await axios.get(`${BACKEND_URL}/continents?yesterday&sort`);
    const total = {
      cases: 0,
      tests: 0,
      deaths: 0,
      recovered: 0,
      todayCases: 0,
      todayTest: 0,
      todayDeaths: 0,
      todayRecovered: 0,
    };
    const { data } = res;

    data.forEach(continent => {
      total.cases += continent.cases;
      total.deaths += continent.deaths;
      total.recovered += continent.recovered;
      total.tests += continent.tests;
      total.todayCases += continent.todayCases;
      total.todayDeaths += continent.todayDeaths;
      total.todayRecovered += continent.todayRecovered;
    });

    dispatch({ type: ALLCONTINENTS_SUCESS, payload: { data, total } });
  } catch (error) {
    dispatch({ type: ALLCONTINENTS_FAILED, payload: error });
  }
};
