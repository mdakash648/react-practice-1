import React from 'react';

const Card1 = ({ img, title, contact, tag, btnText }) => {
  return (
    <>
      <div className='max-w-sm w-full bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300'>
        <div className='h-48 overflow-hidden'>
          <img
            src={img}
            alt='Card Image'
            className='w-full h-full object-cover hover:scale-110 transition duration-500'
          />
        </div>

        <div className='p-6'>
          <h2 className='text-xl font-bold text-slate-800 mb-2'>{title}</h2>

          <p className='text-slate-500 text-sm mb-4'>{contact}</p>

          <div className='flex flex-wrap gap-2 mb-4'>
            {tag.map((item, index) => (
              <span
                key={index}
                className='text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full'
              >
                {item}
              </span>
            ))}
          </div>

          <button className='w-full bg-slate-900 text-white py-2 rounded-xl font-medium hover:bg-slate-700 transition duration-300'>
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card1;
