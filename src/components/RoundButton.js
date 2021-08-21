import React from 'react';

const RoundButton = ({ image, className }) => {
  return (
    <button type='button' className={className}>
      <img src={image} alt='' />
    </button>
  );
};

export default RoundButton;
