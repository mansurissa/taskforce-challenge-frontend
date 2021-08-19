import React from 'react';
import Profile from '../assets/issa.png';

const About = () => {
  return (
    <div className='about flex'>
      <div className='w-full'>
        <img src={Profile} alt='' className='profile' />
      </div>
      <div className='w-full'>
        <h1 className='larger-black'>NSABIMANA Issa</h1>
        <h3>SKILLS</h3>
        <p>React js, Redux, Nodejs, Postres, MongoDB, Git </p>
      </div>
    </div>
  );
};

export default About;
