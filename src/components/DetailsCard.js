import React from 'react';

const DetailsCard = ({ total }) => {
  return (
    <div className='total details'>
      <div className='detailsCard'>
        <p className='large'>{total.tests.toLocaleString()}</p>
        <p className='bold'>Tests</p>
        <p className='light'>{total.tests.toLocaleString()}</p>
      </div>
      <div className='detailsCard'>
        <p className='large'>{total.todayCases.toLocaleString()}</p>
        <p className='bold'>Postive cases</p>
        <p className='light'>{total.cases.toLocaleString()}</p>
      </div>
      <div className='detailsCard'>
        <p className='large'>342</p>
        <p className='bold'>Hospitalized</p>
        <p className='light'>29,534</p>
      </div>
      <div className='detailsCard'>
        <p className='large'>{total.todayRecovered.toLocaleString()}</p>
        <p className='bold'>Recovered</p>
        <p className='light'>{total.recovered.toLocaleString()}</p>
      </div>
      <div className='detailsCard'>
        <p className='large'>{total.todayDeaths.toLocaleString()}</p>
        <p className='bold'>Deaths</p>
        <p className='light'>{total.deaths.toLocaleString()}</p>
      </div>
      <div className='detailsCard'>
        <p className='large'>111,423,342</p>
        <p className='bold'>Vaccinated</p>
        <p className='light'>29,534</p>
      </div>
    </div>
  );
};

export default DetailsCard;
