import React from 'react';
import Logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <div className='navBar'>
      <img src={Logo} alt='logo' />
      <button className='button roundBtn'>CONTACT</button>
    </div>
  );
};

export default NavBar;
