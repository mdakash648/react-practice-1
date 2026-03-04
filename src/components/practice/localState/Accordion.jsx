import React, { useState } from 'react';

const Accordion = () => {
  const [activeAccrodion, setActiveAccrodion] = useState(null);
  const handleActiveBtn = (index) => {
    setActiveAccrodion(activeAccrodion == index ? null : index);
  };
  const data = [
    {
      title: '1st Accordion title',
      contant: '1st Accordion contnate',
    },
    {
      title: '2nd Accordion title',
      contant: '2nd Accordion contnate',
    },
    {
      title: '3rd Accordion title',
      contant: '3rd Accordion contnate',
    },
    {
      title: '4th Accordion title',
      contant: '4th Accordion contnate',
    },
  ];
  return (
    <>
      <div className='max-w-md mx-auto mt-10 space-y-4 my-10'>
        {data.map((item, index) => (
          <div className='border rounded-xl shadow-sm'>
            <button
              className='w-full flex justify-between items-center px-5 py-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition'
              key={index}
              onClick={() => handleActiveBtn(index)}
            >
              <span>{item.title}</span>
              <span className='text-xl'>+</span>
            </button>
            {activeAccrodion == index && (
              <div className='px-5 pb-4 text-gray-600 text-sm'>
                {item.contant}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;
