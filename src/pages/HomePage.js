import React, { useEffect, useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import Crouse from 'react-items-carousel';
import { useDispatch, useSelector } from 'react-redux';
import About from '../components/About';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Back from '../assets/back.svg';
import Next from '../assets/next.svg';
import { fetchAllContinentsData } from '../redux/actionCreators/covidDataAction';

const HomePage = () => {
  const [selected, setSelected] = useState('');

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 80;

  const dispatch = useDispatch();
  const { total, allContintents } = useSelector(state => state.totalCases);

  useEffect(() => {
    dispatch(fetchAllContinentsData());
  }, []);

  return (
    <div>
      <div className='header bg-main'>
        <NavBar />
        <h1 className='h1 white'>UPDATES</h1>
        <p className='small'>Search a country</p>
        <div className='search'>
          <div className='countries'>
            <ReactFlagsSelect
              selected={selected}
              onSelect={code => setSelected(code)}
            />
          </div>
          <input type='date' placeholder='hello' />
          <button type='button' className=' button submitBtn'>
            SUBMIT
          </button>
        </div>

        <div className='total'>
          <p className='larger'>
            {total.length && total.cases.toLocaleString()}
          </p>
          <p className='small'> Cumulatively</p>
        </div>
      </div>
      {total.length && (
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
      )}

      <div className='text-center'>
        <h1 className='larger-black'>PER CONTINENTS</h1>

        <div style={{ padding: `0 ${chevronWidth}px`, margin: '4rem 0' }}>
          <Crouse
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            gutter={40}
            showSlither={true}
            activePosition={'center'}
            leftChevron={
              <button type='button' className='next'>
                <img src={Next} alt='' />
              </button>
            }
            rightChevron={
              <button type='button' className='back'>
                <img src={Back} alt='' />
              </button>
            }
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {allContintents.length &&
              allContintents.map(continent => (
                <div className='slide flex w-full'>
                  <div className='left w-full'>
                    <p className='larger-black'>{continent.continent}</p>
                    <p className='large'>
                      {continent.todayCases.toLocaleString()}
                    </p>
                    <p className='bold'>New cases</p>
                    <p className='light'>
                      All cases: {continent.cases.toLocaleString()}
                    </p>
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
              ))}
          </Crouse>
        </div>
      </div>

      <About />
      <Contacts />
      <Footer />
    </div>
  );
};

export default HomePage;
