import React from 'react';
import Container from '../common/Container';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300'>
      {/* <!-- Top Footer --> */}
      <Container>
        <div className=' py-16 grid md:grid-cols-4 gap-12'>
          {/* <!-- Brand Info --> */}
          <div>
            <h2 className='text-2xl font-bold text-white mb-4'>SaaSify</h2>
            <p className='text-gray-400 mb-6'>
              Modern SaaS platform helping startups scale faster with automation
              and analytics.
            </p>
            <div className='flex space-x-4'>
              <span className='bg-gray-800 px-3 py-1 rounded-lg text-sm'>
                Facebook
              </span>
              <span className='bg-gray-800 px-3 py-1 rounded-lg text-sm'>
                Twitter
              </span>
              <span className='bg-gray-800 px-3 py-1 rounded-lg text-sm'>
                LinkedIn
              </span>
            </div>
          </div>

          {/* <!-- Company Links --> */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Company</h3>
            <ul className='space-y-2'>
              <li>
                <a href='about.html' className='hover:text-white'>
                  About Us
                </a>
              </li>
              <li>
                <a href='services.html' className='hover:text-white'>
                  Services
                </a>
              </li>
              <li>
                <a href='blog.html' className='hover:text-white'>
                  Blog
                </a>
              </li>
              <li>
                <a href='contact.html' className='hover:text-white'>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Resources --> */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Resources</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='hover:text-white'>
                  Documentation
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Help Center
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white'>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Newsletter --> */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Subscribe</h3>
            <p className='text-gray-400 mb-4'>
              Get SaaS tips and product updates.
            </p>
            <form className='flex'>
              <input
                type='email'
                placeholder='Your email'
                className='w-full p-2 rounded-l-lg text-gray-800'
              />

              <button className='bg-indigo-600 px-4 rounded-r-lg text-white'>
                Join
              </button>
            </form>
          </div>
        </div>

        {/* <!-- Bottom Footer --> */}
        <div className='border-t border-gray-800 py-6 text-center text-sm text-gray-500'>
          © 2026 SaaSify. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
