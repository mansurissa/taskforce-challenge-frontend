import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import SelectCountry from './SelectCountry';

/**
 * return Header jsx
 * @param   {number} totalCases   total cases
 * @return  {JSX}            Header  data
 */

const Header = ({ totalCases, setSelected, submitHandler, error, display }) => {
  return (
    <div className='header bg-main'>
      <NavBar />
      <h1 className='h1 white'>UPDATES</h1>
      <p className='small'>Search a country</p>
      <div className='search'>
        <div className='countries'>
          <SelectCountry setSelected={setSelected} />
        </div>
        <input type='date' placeholder='1/1/2021' />
        <button
          type='button'
          className=' button submitBtn'
          onClick={e => {
            e.preventDefault();
            submitHandler();
          }}
        >
          SUBMIT
        </button>
      </div>
      <h3 className={`error ${display}`}>{error}</h3>
      <div className='total'>
        <p className='larger'>{totalCases}</p>
        <p className='small'>Cumulatively</p>
      </div>
    </div>
  );
};

Header.propTypes = {
  totalCases: PropTypes.number.isRequired,
};

Header.defaultProps = {
  totalCases: 0,
};

export default Header;
