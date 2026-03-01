import React from 'react';
import Container from '../common/Container';

const Header = () => {
  return (
    <nav className='bg-white shadow-md'>
      <Container>
        <div className='py-4 flex justify-between items-center'>
          <div className='max-w-15 flex justify-center items-center'>
            <img
              className='w-full h-full'
              src='src/assets/logo.png'
              alt='logo'
            />
          </div>
          <div className='space-x-6 font-medium'>
            <a href='index.html' className='text-indigo-600'>
              Home
            </a>
            <a href='about.html' className='hover:text-indigo-600'>
              About
            </a>
            <a href='services.html' className='hover:text-indigo-600'>
              Services
            </a>
            <a href='blog.html' className='hover:text-indigo-600'>
              Blog
            </a>
            <a href='contact.html' className='hover:text-indigo-600'>
              Contact
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
