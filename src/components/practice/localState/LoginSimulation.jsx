import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginSimulation = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isPassShow, setIspassShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
    if (username === 'admin' && password === '1234') {
      setIsLogin(true);
      setUsername('');
      setPassword('');
    } else {
      setIsLogin(false);
    }
  };
  const EyeIcon = isPassShow ? FaEye : FaEyeSlash;
  const handlePassShow = () => {
    setIspassShow(!isPassShow);
  };
  return (
    <div className='bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md my-10 mx-auto'>
      <h2 className='text-3xl font-bold text-center text-gray-800 mb-6'>
        Welcome Back 👋
      </h2>

      {showMessage && (
        <div
          className={`mb-4 px-4 py-3 rounded-xl text-sm ${
            isLogin
              ? 'bg-green-100 border border-green-400 text-green-700'
              : 'bg-red-100 border border-red-400 text-red-700'
          }`}
        >
          {isLogin ? 'Login Successful ✅' : 'Invalid Credentials ❌'}
        </div>
      )}

      <form onSubmit={handleSubmit} className='space-y-5'>
        <div>
          <label className='block text-sm font-medium text-gray-600 mb-1'>
            Username
          </label>
          <input
            value={username}
            type='text'
            placeholder='Enter your username'
            className='w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-600 mb-1'>
            Password
          </label>
          <div className='flex items-center'>
            <input
              value={password}
              type={isPassShow ? 'text' : 'password'}
              placeholder='Enter your password'
              className='w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200'
              onChange={(e) => setPassword(e.target.value)}
            />
            <EyeIcon
              className='-ml-6.25 cursor-pointer'
              onClick={() => handlePassShow()}
            />
          </div>
        </div>

        <button
          type='submit'
          className='w-full bg-indigo-600 text-white py-2 rounded-xl font-semibold hover:bg-indigo-700 transition duration-200 shadow-md'
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginSimulation;
