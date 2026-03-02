import React, { useState } from 'react';

const InputFieldLivePreview = () => {
  const [input, setInput] = useState('Type something...');
  return (
    <>
      <h1>{input}</h1>
      <input
        placeholder='Enter Text'
        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 my-10'
        type='text'
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
};

export default InputFieldLivePreview;
