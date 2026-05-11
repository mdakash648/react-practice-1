import React, { useRef } from 'react';

const RefCounter = () => {
  const counter = useRef(0);
  const handallingCounter = () => {
    counter.current = counter.current + 1;
    console.log(counter.current);
  };
  return (
    <>
      <button onClick={handallingCounter}>click me</button>
    </>
  );
};

export default RefCounter;
