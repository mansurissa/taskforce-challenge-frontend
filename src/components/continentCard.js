import React from 'react';
import PropTypes from 'prop-types';
import EachDetail from './EachDetail';

/**
 * return continent's data in jsx
 * @param   {Object} continent  Continent data
 * @return  {JSX}            Continent data
 */

const ContinentCard = ({ continent }) => {
  const { todayCases, todayDeaths, todayRecovered, deaths, recovered, cases } =
    continent;

  return (
    <div className='slide flex w-full'>
      <div className='left w-full p-2'>
        <p className='larger-black '>{continent.continent}</p>
        <p className='large'>{todayCases.toLocaleString()}</p>
        <p className='bold'>New cases</p>
        <p className='light'>All cases: {cases.toLocaleString()}</p>
      </div>
      <div className='bg-main rigt w-full'>
        <EachDetail
          text='Deaths'
          today={todayDeaths.toLocaleString()}
          total={deaths.toLocaleString()}
          name='card'
          todayColor='large-white'
          totalColor='white'
        />
        <EachDetail
          text='Recovered'
          today={todayRecovered.toLocaleString()}
          total={recovered.toLocaleString()}
          name='card'
          todayColor='large-white'
          totalColor='white'
        />
        <EachDetail
          text='Deaths'
          today={todayDeaths.toLocaleString()}
          total={deaths.toLocaleString()}
          name='card'
          todayColor='large-white'
          totalColor='white'
        />
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
