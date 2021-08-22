import React from 'react';
import { formatNumber } from '../helpers';
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
        today={formatNumber(tests)}
        name='detailsCard'
        total={formatNumber(tests)}
        todayColor='large'
        totalColor='light'
      />
      <EachDetail
        text='Postive Cases'
        today={formatNumber(todayCases)}
        name='detailsCard'
        total={formatNumber(cases)}
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
        today={formatNumber(todayRecovered)}
        name='detailsCard'
        total={formatNumber(recovered)}
        todayColor='large'
        totalColor='light'
      />
      <EachDetail
        text='Deaths'
        today={formatNumber(todayDeaths)}
        name='detailsCard'
        total={formatNumber(deaths)}
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
