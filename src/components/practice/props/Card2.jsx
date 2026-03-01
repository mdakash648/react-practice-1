import React from 'react';

const Card2 = ({ img, name, age, Profession }) => {
  let status;
  if (age > 0 && age <= 18) {
    status = 'Teen';
  } else {
    status = 'adult';
  }
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
          <h2 className='text-xl font-bold text-slate-800 mb-2'>
            Name : {name}
          </h2>

          <p className='text-slate-500 text-sm mb-4'>Age : {age}</p>
          <p className='text-slate-500 text-sm mb-4'>
            Profession : {Profession}
          </p>

          <h2 className='w-full bg-slate-900 text-white py-2 rounded-xl font-medium hover:bg-slate-700 transition duration-300'>
            status : {status}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Card2;
