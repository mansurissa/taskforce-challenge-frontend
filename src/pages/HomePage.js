import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Crouse from 'react-items-carousel';
import About from '../components/About';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import Back from '../assets/back.svg';
import Next from '../assets/next.svg';
import { fetchAllContinentsData } from '../redux/actionCreators/covidDataAction';
import { useWindowSize } from '../hooks/resizeHook';
import Header from '../components/Header';
import DetailsCard from '../components/DetailsCard';
import ContinentCard from '../components/ContinentCard';
import RoundButton from '../components/RoundButton';

const HomePage = () => {
  const size = useWindowSize();

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = size && size.width > 500 ? 80 : 40;

  const dispatch = useDispatch();
  const { total, allContintents } = useSelector(state => state.totalCases);

  useEffect(() => {
    dispatch(fetchAllContinentsData());
  }, [dispatch]);

  return (
    <div>
      <Header totalCases={total.cases.toLocaleString()} />
      <DetailsCard total={total} />
      <div className='text-center'>
        <h1 className='larger-black'>PER CONTINENTS</h1>

        <div style={{ padding: `0 ${chevronWidth}px`, margin: '4rem 0' }}>
          <Crouse
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={size && size.width >= 900 ? 3 : 1}
            gutter={30}
            showSlither={true}
            activePosition={'center'}
            leftChevron={<RoundButton image={Next} className='next' />}
            rightChevron={<RoundButton image={Back} className='back' />}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {allContintents.length &&
              allContintents.map(continent => (
                <ContinentCard continent={continent} />
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
