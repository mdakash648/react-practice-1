import React from 'react';

const Container = ({ children }) => {
  return (
    <div className='max-w-7xl mx-auto px-6'>{children}</div>
    // <div style={{ border: "1px solid #ccc", padding: "10px" }}>
    //     {children}
    // </div>
  );
};

export default Container;
