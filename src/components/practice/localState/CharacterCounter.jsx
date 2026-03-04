import React, { useState } from 'react';

const CharacterCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='relative w-full my-10'>
        <textarea
          id='myTextarea'
          rows='5'
          placeholder='Write your text here...'
          className='w-full p-3 border rounded-lg bg-gray-100 text-gray-800
           focus:outline-none focus:ring-2 focus:ring-blue-500
           placeholder-gray-400 resize-none
           dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-400'
          onChange={(e) => setCount(e.target.value.length)}
          maxLength={100}
        ></textarea>

        {/* <!-- Counter --> */}
        <div
          id='counter'
          className='absolute bottom-2 right-3 text-sm text-gray-500 dark:text-gray-400'
        >
          {count}/100
        </div>
      </div>
    </>
  );
};

export default CharacterCounter;
