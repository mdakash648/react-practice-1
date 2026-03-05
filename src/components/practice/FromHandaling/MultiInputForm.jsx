import React, { useState } from 'react';

const MultiInputForm = () => {
  const [inputValue, SetInputValue] = useState({
    name: '',
    email: '',
    age: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <form className='bg-white p-6 rounded-xl shadow-md w-full max-w-sm'>
        <h2 className='text-2xl font-semibold text-center mb-6'>
          Multi Input Form
        </h2>

        {/* Name Field */}
        <div className='mb-4'>
          <label className='block mb-1 text-gray-700'>Name</label>
          <input
            name='name'
            type='text'
            placeholder='Enter your name'
            className='w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            value={inputValue.name}
            onChange={handleChange}
          />
        </div>

        {/* Email Field */}
        <div className='mb-4'>
          <label className='block mb-1 text-gray-700'>Email</label>
          <input
            name='email'
            type='email'
            placeholder='Enter your email'
            className='w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            value={inputValue.email}
            onChange={handleChange}
          />
        </div>
        {/* Age Field */}
        <div className='mb-4'>
          <label className='block mb-1 text-gray-700'>Age</label>
          <input
            name='age'
            type='Number'
            placeholder='Enter your Age'
            className='w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            value={inputValue.age}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <input
          type='submit'
          value='Submit'
          className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200 cursor-pointer'
        />
      </form>
      <div className='text-3xl my-3 border-2 p-3 rounded-2xl max-w-fit'>
        <ul>
          <li className='my-1.5'>Name : {inputValue.name}</li>
          <li className='my-1.5'>Email : {inputValue.email}</li>
          <li className='my-1.5'>Age : {inputValue.age}</li>
        </ul>
      </div>
    </div>
  );
};

export default MultiInputForm;
