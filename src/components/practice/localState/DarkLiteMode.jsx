import React, { useState } from 'react';

const DarkLiteMode = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <div className='flex justify-end p-6'>
        <button
          className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-3xl my-3'
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? 'dark' : 'Light'}
        </button>
      </div>
      <div
        className={`max-w-3xl mx-auto shadow-lg rounded-2xl mt-10 p-8 ${isDark ? 'bg-black' : 'bg-white'}`} // best practices
      >
        {/* <!-- Blog Title --> */}
        <h1
          className={
            isDark
              ? 'text-4xl font-bold text-white mb-4'
              : 'text-4xl font-bold text-gray-800 mb-4'
          } //in this way is work but don't use this way. use this way {`max-w-3xl ${isDark ? 'bg-black' : 'bg-white'}`}
        >
          How to Become a Web Developer in 2026
        </h1>

        {/* <!-- Author Section --> */}
        <div className='flex items-center gap-4 mb-6'>
          <img
            src='https://i.pravatar.cc/50'
            alt='Author'
            className='w-12 h-12 rounded-full'
          />
          <div>
            <p
              className={
                isDark
                  ? 'font-semibold text-gray-200'
                  : 'font-semibold text-gray-700'
              }
            >
              Md Akash
            </p>
            <p
              className={
                isDark ? 'font-semibold text-gray-200' : 'text-sm text-gray-500'
              }
            >
              March 4, 2026 · 5 min read
            </p>
          </div>
        </div>

        {/* <!-- Blog Image --> */}
        <img
          src='https://images.unsplash.com/photo-1498050108023-c5249f4df085'
          alt='Blog Image'
          className='w-full h-64 object-cover rounded-xl mb-6'
        />

        {/* <!-- Blog Content --> */}
        <p
          className={
            isDark
              ? 'text-gray-300 leading-relaxed mb-4'
              : 'text-gray-700 leading-relaxed mb-4'
          }
        >
          Web development is one of the most in-demand skills in 2026. With
          technologies evolving rapidly, learning HTML, CSS, and JavaScript is
          the first step to entering the tech industry.
        </p>

        <p
          className={
            isDark
              ? 'text-gray-300 leading-relaxed mb-4'
              : 'text-gray-700 leading-relaxed mb-4'
          }
        >
          Start by mastering the basics. Then move into frameworks like React
          and backend technologies. Consistency and practice are the keys to
          becoming a professional developer.
        </p>

        <blockquote
          className={
            isDark
              ? 'border-l-4 border-blue-500 pl-4 italic text-gray-100 my-6'
              : 'border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6'
          }
        >
          "Code every day, even if it's just for 30 minutes."
        </blockquote>

        <p
          className={
            isDark
              ? 'text-gray-300 leading-relaxed'
              : 'text-gray-700 leading-relaxed'
          }
        >
          Build projects, contribute to open-source, and stay updated with
          industry trends. The journey may feel slow at first, but trust the
          process and keep pushing forward.
        </p>

        {/* <!-- Tags --> */}
        <div className='mt-8 flex gap-2 flex-wrap'>
          <span className='bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm'>
            HTML
          </span>
          <span className='bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm'>
            Tailwind
          </span>
          <span className='bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm'>
            Web Dev
          </span>
        </div>
      </div>
    </>
  );
};

export default DarkLiteMode;
