import React from 'react';
import EachDetail from './EachDetail';

const DetailsCard = ({ total }) => {
  const {
    cases,
    tests,
    recovered,
    deaths,
    todayCases,
    todayRecovered,
    todayDeaths,
  } = total;

  return (
    <div className='total details'>
      <EachDetail
        text='Tests'
        today={tests.toLocaleString()}
        name='detailsCard'
        total={tests.toLocaleString()}
        todayColor='large'
        totalColor='light'
      />
      <EachDetail
        text='Postive Cases'
        today={todayCases.toLocaleString()}
        name='detailsCard'
        total={cases.toLocaleString()}
        todayColor='large'
        totalColor='light'
      />
      <EachDetail
        text='Hospitalized'
        today='234'
        name='detailsCard'
        total='213,453'
        todayColor='large'
        totalColor='light'
      />
      <EachDetail
        text='Recovered'
        today={todayRecovered.toLocaleString()}
        name='detailsCard'
        total={recovered.toLocaleString()}
        todayColor='large'
        totalColor='light'
      />
      <EachDetail
        text='Deaths'
        today={todayDeaths.toLocaleString()}
        name='detailsCard'
        total={deaths.toLocaleString()}
        todayColor='large'
        totalColor='light'
      />

      <EachDetail
        text='Vaccinated'
        today='23,674'
        name='detailsCard'
        total='426,213,453'
        todayColor='large'
        totalColor='light'
      />
    </div>
  );
};

export default DetailsCard;
