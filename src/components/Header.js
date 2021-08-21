import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import PropTypes from 'prop-types';
import NavBar from './NavBar';

/**
 * return Header jsx
 * @param   {number} totalCases   total cases
 * @return  {JSX}            Header  data
 */

const Header = ({ totalCases }) => {
  const [selected, setSelected] = useState('');

  return (
    <div className='header bg-main'>
      <NavBar />
      <h1 className='h1 white'>UPDATES</h1>
      <p className='small'>Search a country</p>
      <div className='search'>
        <div className='countries'>
          <ReactFlagsSelect
            selected={selected}
            onSelect={code => setSelected(code)}
            placeholder='Select country'
          />
        </div>
        <input type='date' placeholder='hello' />
        <button type='button' className=' button submitBtn'>
          SUBMIT
        </button>
      </div>

      <div className='total'>
        <p className='larger'>{totalCases}</p>
        <p className='small'> Cumulatively</p>
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
