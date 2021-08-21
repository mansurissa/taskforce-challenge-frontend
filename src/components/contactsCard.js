import React from 'react';
import PropTypes from 'prop-types';

/**
 * return continent's data in jsx
 * @param   {string} title   title
 * @param   {string} data   data of that title
 * @return  {JSX}            contact card data
 */

const ContactsCard = ({ title, data }) => {
  return (
    <div className='p-2'>
      <p className='white '>{title}</p>
      <p className='white'>{data}</p>
    </div>
  );
};

ContactsCard.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

ContactsCard.defaultProps = {
  title: '',
  data: '',
};

export default ContactsCard;
