import axios from 'axios';
import { BACKEND_URL } from '../../helpers/';
import {
  ALLCONTINENTS_FAILED,
  ALLCONTINENTS_PENDING,
  ALLCONTINENTS_SUCESS,
  COUNTRIES_LIST_FAIL,
  COUNTRIES_LIST_PENDIG,
  COUNTRIES_LIST_SUCCESS,
} from '../actionTypes/types';

export const fetchAllContinentsData = () => async dispatch => {
  dispatch({ type: ALLCONTINENTS_PENDING });
  try {
    const { data } = await axios.get(
      `${BACKEND_URL}/continents?yesterday&sort`,
    );
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

export const oneCountryAction = country => async dispatch => {
  dispatch({ type: COUNTRIES_LIST_PENDIG });

  try {
    const { data } = await axios.get(
      `${BACKEND_URL}/countries/${country}?yesterday&strict&query%20`,
    );

    dispatch({
      type: COUNTRIES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: COUNTRIES_LIST_FAIL, payload: error });
  }
};
