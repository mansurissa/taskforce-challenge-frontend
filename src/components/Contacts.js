import React from 'react';
import ContactsCard from './ContactsCard';

const Contacts = () => {
  return (
    <div className='bg-secondary text-center'>
      <h1 className='h1 white'>REACH ME</h1>
      <ContactsCard title='Email' data='mansurissa6@gmail.com' />
      <ContactsCard title='Phone' data='0787222766' />
      <div className='p-2'>
        <p className='white '>Profile</p>
        <p className='white'>
          <a href='https://devissa.com/'>Devissa</a>{' '}
        </p>
      </div>
    </div>
  );
};

export default Contacts;
