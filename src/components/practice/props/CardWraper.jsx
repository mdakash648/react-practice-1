import React from 'react';

const CardWraper = ({ children }) => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-4 my-10'>
      {children}
    </div>
  );
};

export default CardWraper;
