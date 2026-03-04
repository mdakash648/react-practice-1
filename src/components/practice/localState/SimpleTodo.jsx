import React, { useState } from 'react';

const SimpleTodo = () => {
  const [input, setInput] = useState();
  const [todolist, setTodolist] = useState([]);
  const addHandaling = () => {
    if (input !== '') {
      setTodolist([...todolist, input]);
      setInput('');
    }
  };
  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='bg-white w-full max-w-md p-6 rounded-2xl shadow-lg'>
          <h2 className='text-2xl font-bold text-center mb-6 text-gray-800'>
            Simple Todo App
          </h2>

          {/* <!-- Input & Button --> */}
          <div className='flex gap-3 mb-6'>
            <input
              value={input}
              type='text'
              placeholder='Enter your task...'
              className='flex-1 px-4 py-2 border border-gray-300 rounded-xl 
               focus:outline-none focus:ring-2 focus:ring-blue-500 
               focus:border-blue-500 transition duration-200'
              onChange={(e) => setInput(e.target.value)}
            />

            <button
              className='px-5 py-2 bg-blue-500 text-white font-medium 
               rounded-xl hover:bg-blue-600 active:scale-95 
               transition duration-200'
              onClick={() => addHandaling()}
            >
              Add
            </button>
          </div>

          {/* <!-- Todo List --> */}
          <ul className='space-y-3'>
            {todolist.map((todo, index) => (
              <li
                className='px-4 py-2 bg-gray-50 rounded-xl shadow-sm 
                 hover:bg-gray-100 transition duration-200'
                key={index}
              >
                {todo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SimpleTodo;
