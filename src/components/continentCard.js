import React from 'react';
import PropTypes from 'prop-types';

/**
 * return continent's data in jsx
 * @param   {Object} continent  Continent data
 * @return  {JSX}            Continent data
 */

const ContinentCard = ({ continent }) => {
  return (
    <div className='slide flex w-full'>
      <div className='left w-full'>
        <p className='larger-black'>{continent.continent}</p>
        <p className='large'>{continent.todayCases.toLocaleString()}</p>
        <p className='bold'>New cases</p>
        <p className='light'>All cases: {continent.cases.toLocaleString()}</p>
      </div>
      <div className='bg-main rigt w-full'>
        <div className='card'>
          <p className='large-white'>
            {continent.todayDeaths.toLocaleString()}
          </p>
          <p className='bold'>New Deaths</p>
          <p className='white'>
            Total Deaths: {continent.deaths.toLocaleString()}{' '}
          </p>
        </div>
        <div className='card'>
          <p className='large-white'>
            {continent.todayRecovered.toLocaleString()}
          </p>
          <p className='bold'>Newly Recovered</p>
          <p className='white'>
            Total Deaths: {continent.recovered.toLocaleString()}{' '}
          </p>
        </div>
        <div className='card'>
          <p className='large-white'>
            {continent.todayDeaths.toLocaleString()}
          </p>
          <p className='bold'>New Vaccinated</p>
          <p className='white'>
            Total Deaths: {continent.deaths.toLocaleString()}{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

ContinentCard.propTypes = {
  continent: PropTypes.string.isRequired,
  cases: PropTypes.number.isRequired,
  deaths: PropTypes.number.isRequired,
  recovered: PropTypes.number.isRequired,
  todayCases: PropTypes.number.isRequired,
  todayRecovered: PropTypes.number.isRequired,
  todayDeaths: PropTypes.number.isRequired,
};

ContinentCard.defaultProps = {
  continent: 'hello',
  Cases: 0,
  Deaths: 0,
  Recovered: 0,
  todayCases: 0,
  todayDeaths: 0,
  todayRecovered: 0,
};

export default ContinentCard;
