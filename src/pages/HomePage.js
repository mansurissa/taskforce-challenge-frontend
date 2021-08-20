import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import About from '../components/About';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const HomePage = () => {
  const [selected, setSelected] = useState('');
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
          <p className='larger'>2,833,563</p>
          <p className='small'> Cumulatively</p>
        </div>
      </div>
      <div className='total details'>
        <div className='detailsCard'>
          <p className='large'>111,423,342</p>
          <p className='bold'>Tests</p>
          <p className='light'>29,534</p>
        </div>
        <div className='detailsCard'>
          <p className='large'>111,423,342</p>
          <p className='bold'>Tests</p>
          <p className='light'>29,534</p>
        </div>
        <div className='detailsCard'>
          <p className='large'>111,423,342</p>
          <p className='bold'>Tests</p>
          <p className='light'>29,534</p>
        </div>
        <div className='detailsCard'>
          <p className='large'>111,423,342</p>
          <p className='bold'>Tests</p>
          <p className='light'>29,534</p>
        </div>
        <div className='detailsCard'>
          <p className='large'>111,423,342</p>
          <p className='bold'>Tests</p>
          <p className='light'>29,534</p>
        </div>
        <div className='detailsCard'>
          <p className='large'>111,423,342</p>
          <p className='bold'>Tests</p>
          <p className='light'>29,534</p>
        </div>
      </div>

      <div className='text-center'>
        <h1 className='larger-black'>PER CONTINENTS</h1>
        <div className='sliderContainer'>
          <div className='slide flex w-full'>
            <div className='left w-full'>
              <p className='larger-black'>AFRICA</p>
              <p className='large'>342</p>
              <p className='bold'>Tests</p>
              <p className='light'>All cases 29,534</p>
            </div>
            <div className='bg-main rigt w-full'>
              <div className='card'>
                <p className='large-white'>111,423,342</p>
                <p className='bold'>Tests</p>
                <p className='light'>All cases 29,534</p>
              </div>
              <div className='card'>
                <p className='large-white'>111,423,342</p>
                <p className='bold'>Tests</p>
                <p className='light'>All cases 29,534</p>
              </div>
              <div className='card'>
                <p className='large-white'>111,423,342</p>
                <p className='bold'>Tests</p>
                <p className='light'>All cases 29,534</p>
              </div>
            </div>
          </div>
          <div className='slide flex w-full'>
            <div className='left w-full'>
              <p className='larger-black'>AFRICA</p>
              <p className='large'>342</p>
              <p className='bold'>Tests</p>
              <p className='light'>All cases 29,534</p>
            </div>
            <div className='bg-main rigt w-full'>
              <div className='card'>
                <p className='large-white'>111,423,342</p>
                <p className='bold'>Tests</p>
                <p className='light'>All cases 29,534</p>
              </div>
              <div className='card'>
                <p className='large-white'>111,423,342</p>
                <p className='bold'>Tests</p>
                <p className='light'>All cases 29,534</p>
              </div>
              <div className='card'>
                <p className='large-white'>111,423,342</p>
                <p className='bold'>Tests</p>
                <p className='light'>All cases 29,534</p>
              </div>
            </div>
          </div>
          <div className='slide flex w-full'>
            <div className='left w-full'>
              <p className='larger-black'>AFRICA</p>
              <p className='large'>342</p>
              <p className='bold'>Tests</p>
              <p className='light'>All cases 29,534</p>
            </div>
            <div className='bg-main rigt w-full'>
              <div className='card'>
                <p className='large-white'>111,423,342</p>
                <p className='bold'>Tests</p>
                <p className='light'>All cases 29,534</p>
              </div>
              <div className='card'>
                <p className='large-white'>111,423,342</p>
                <p className='bold'>Tests</p>
                <p className='light'>All cases 29,534</p>
              </div>
              <div className='card'>
                <p className='large-white'>111,423,342</p>
                <p className='bold'>Tests</p>
                <p className='light'>All cases 29,534</p>
              </div>
            </div>
          </div>

          <div className='slide flex w-full'>
            <div className='left w-full'>
              <p className='larger-black'>AFRICA</p>
              <p className='large'>342</p>
              <p className='bold'>Tests</p>
              <p className='light'>All cases 29,534</p>
            </div>
            <div className='bg-main rigt w-full'>
              <div className='card'>
                <p className='large-white'>111,423,342</p>
                <p className='bold'>Tests</p>
                <p className='light'>All cases 29,534</p>
              </div>
              <div className='card'>
                <p className='large-white'>111,423,342</p>
                <p className='bold'>Tests</p>
                <p className='light'>All cases 29,534</p>
              </div>
              <div className='card'>
                <p className='large-white'>111,423,342</p>
                <p className='bold'>Tests</p>
                <p className='light'>All cases 29,534</p>
              </div>
            </div>
          </div>

          <div className='slide flex w-full'>
            <div className='left w-full'>
              <p className='larger-black'>AFRICA</p>
              <p className='large'>342</p>
              <p className='bold'>Tests</p>
              <p className='light'>All cases 29,534</p>
            </div>
            <div className='bg-main rigt w-full'>
              <div className='card'>
                <p className='large-white'>111,423,342</p>
                <p className='bold'>Tests</p>
                <p className='light'>All cases 29,534</p>
              </div>
              <div className='card'>
                <p className='large-white'>111,423,342</p>
                <p className='bold'>Tests</p>
                <p className='light'>All cases 29,534</p>
              </div>
              <div className='card'>
                <p className='large-white'>111,423,342</p>
                <p className='bold'>Tests</p>
                <p className='light'>All cases 29,534</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Contacts />
      <Footer />
    </div>
  );
};

export default HomePage;
