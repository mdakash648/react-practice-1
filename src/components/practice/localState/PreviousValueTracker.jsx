import React, { useState, useEffect, useRef } from 'react';

const PreviousValueTracker = () => {
  const [currentValue, setCurrentValue] = useState('');
  // আগের মান ধরে রাখার জন্য 'ref' ব্যবহার করা হয়েছে
  const prevValueRef = useRef('');

  // প্রতিবার currentValue আপডেট হওয়ার পর এই useEffect চলবে
  useEffect(() => {
    // বর্তমান মানটি পরের বারের জন্য 'আগের মান' হিসেবে সেভ করে রাখা হচ্ছে
    prevValueRef.current = currentValue;
  }, [currentValue]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Previous Value Tracker</h2>
      <input
        type='text'
        value={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
        placeholder='Type something...'
      />
      <p>
        <b>Current Value:</b> {currentValue}
      </p>
      {/* prevValueRef.current এখানে আগের মানটি প্রদর্শন করছে */}
      <p>
        <b>Previous Value:</b> {prevValueRef.current}
      </p>
    </div>
  );
};

export default PreviousValueTracker;
