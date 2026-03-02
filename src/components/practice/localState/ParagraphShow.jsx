import React, { useState } from 'react';

const ParagraphShow = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className={`text-4xl border-2 p-6 ${show ? 'block' : 'hidden'}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ea
        ipsum laborum omnis id repellendus odio tempora quasi deserunt
        similique, numquam hic dolorum iusto libero saepe incidunt maxime!
        Eligendi, consequatur.
      </div>
      <button
        className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-3xl my-3'
        onClick={() => setShow(!show)}
      >
        Show / Hide
      </button>
    </>
  );
};

export default ParagraphShow;
