import React from 'react';

const Paragraph = ({
  name = '<name>',
  age = '<age>',
  clas = '<class level>',
}) => {
  return (
    <>
      <p className='mx-auto max-w-7xl  text-4xl/normal capitalize mt-5 bg-amber-50 p-5  '>
        My name is {name}. I am {age} years old. I am currently studying in
        class {clas}. I enjoy reading books and learning new things. In my free
        time, I like to play games and spend time with my friends and family. I
        am friendly, hardworking, and always try to do my best in everything I
        do.
      </p>
    </>
  );
};

export default Paragraph;
