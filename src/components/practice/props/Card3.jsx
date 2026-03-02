import React from 'react';

const Card3 = ({ product, price, isStock }) => {
  return (
    <>
      {/* <!-- In Stock Card --> */}
      <div className='max-w-sm w-full bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300'>
        <h2 className='text-xl font-bold text-slate-800 mb-2'>{product}</h2>

        <p className='text-2xl font-semibold text-slate-900 mb-4'>{price}</p>

        <span
          className={`inline-block  ${isStock ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'} text-sm font-medium px-3 py-1 rounded-full mb-4`}
        >
          {isStock ? 'In Stock' : ' Out of Stock'}
        </span>

        <button
          className={`w-full py-2 rounded-xl font-medium transition ${
            isStock
              ? 'bg-slate-900 text-white hover:bg-slate-700'
              : 'bg-slate-400 text-white cursor-not-allowed'
          }`}
          disabled={false}
        >
          {isStock ? 'Add to Cart' : 'Unavailable'}
        </button>
      </div>
    </>
  );
};

export default Card3;
