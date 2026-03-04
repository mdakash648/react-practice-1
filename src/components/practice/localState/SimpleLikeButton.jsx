import React, { useState } from 'react';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';

const SimpleLikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(0);

  const Icon = isLiked ? AiFillLike : AiOutlineLike;

  const handleLike = () => {
    if (isLiked) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className='text-center'>
        <h1 className='text-3xl font-bold text-blue-600'>
          {isLiked ? 'Liked' : 'Unliked'}
        </h1>

        <h2 className='text-2xl mt-3'>Total Like: {count}</h2>
      </div>

      <div className='flex justify-center mt-5'>
        <Icon
          className={`text-6xl cursor-pointer ${
            isLiked ? 'text-blue-800' : 'text-blue-400'
          }`}
          onClick={handleLike}
        />
      </div>
    </>
  );
};

export default SimpleLikeButton;
