import React, { useState } from 'react';

const UseState = () => {
  const [Heading, setHeading] = useState('This is heading defult value');
  return (
    <>
      <div className='font-bold text-6xl my-10'>{Heading}</div>
      <button onClick={() => setHeading('this heading is after click button')}>
        Click me
      </button>
    </>
  );
};

export default UseState;
