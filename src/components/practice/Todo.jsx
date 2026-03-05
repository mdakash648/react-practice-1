import React, { useState } from 'react';

const Todo = () => {
  const [input, SetInput] = useState();
  const [todoList, setTodoList] = useState([]);
  const handalAddTodo = () => {
    if (input !== '') {
      setTodoList([...todoList, { text: input, done: false }]);
      SetInput('');
    }
  };
  const handalDelete = (index) => {
    const newTodo = [...todoList]; //এইখানে, todolist array copy করার জন্য [...todoList] ব্যবহার করা হয়েছে। just, newTodo = todoList দিলে হবে না। এটা just reference copy করে array না।
    newTodo[index].done = !newTodo[index].done;
    setTodoList(newTodo);
  };
  return (
    <>
      <div className='max-w-md mx-auto my-10 bg-white shadow-xl rounded-2xl p-6'>
        <h2 className='text-2xl font-bold text-gray-800 mb-5 text-center'>
          Todo List
        </h2>

        {/* input section */}
        <div className='flex gap-2 mb-6'>
          <input
            value={input}
            type='text'
            placeholder='Write your todo...'
            className='flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400'
            onChange={(e) => SetInput(e.target.value)}
          />
          <button
            className='px-5 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition'
            onClick={() => handalAddTodo()}
          >
            Add
          </button>
        </div>

        {/* todo list */}
        <ul className='space-y-3'>
          {todoList.map((item, index) => (
            <li className='flex items-center justify-between bg-gray-100 px-4 py-3 rounded-xl'>
              <span
                className={`text-gray-700 ${item.done ? 'line-through' : ''}`}
              >
                {item.text}
              </span>
              <button
                className='px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition'
                onClick={() => handalDelete(index)}
              >
                {item.done ? 'Undo' : 'Delete'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
