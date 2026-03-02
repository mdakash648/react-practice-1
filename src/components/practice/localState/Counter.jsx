import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(10);
  const minus = counter <= 0 ? true : false;
  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-bold text-7xl'>Counter</h1>
      <div
        className={`font-bold text-5xl mt-20 ${counter <= 10 ? 'text-black' : 'text-red-600'}`}
      >
        {counter}
      </div>
      <div className='flex gap-4 mt-10 mb-20'>
        <button
          className={`px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-3xl ${minus ? 'opacity-30 cursor-not-allowed' : 'opacity-100 cursor-default'}`}
          onClick={() => setCounter(counter - 1)}
          disabled={minus}
        >
          Decrease
        </button>
        <button
          className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-3xl'
          onClick={() => setCounter(0)}
        >
          Reset
        </button>

        <button
          className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-3xl'
          onClick={() => setCounter(counter + 1)}
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
