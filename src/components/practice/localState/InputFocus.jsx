import React, { useRef } from 'react';

const InputFocus = () => {
  const inputBox = useRef(null);
  const focusHandelling = () => {
    inputBox.current.focus();
    inputBox.current.style.backgroundColor = 'green';
  };
  return (
    <>
      <input
        type='text'
        placeholder='Type something'
        className='p-1 border-2 border-amber-400 mr-2'
        ref={inputBox}
      />
      <button onClick={focusHandelling} className='border-2 p-1 cursor-pointer'>
        Focus
      </button>
    </>
  );
};

export default InputFocus;
