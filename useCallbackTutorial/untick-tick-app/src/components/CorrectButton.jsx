// CorrectButton.jsx
import React, { useEffect } from 'react';

const heavyComputation = () => {
  let total = 0;
  for (let i = 0; i < 1e8; i++) {
    total += i;
  }
  console.log('✅ Heavy computation in <CorrectButton> done:', total);
};



const CorrectButton = React.memo(({ onToggle }) => {
  console.log('✅ Child <CorrectButton> re-rendered');

  useEffect(() => {
    const result = heavyComputation();
    console.log('Heavy function result (first 5 sorted numbers):', result);
  });

  return <button onClick={onToggle}>Correct Button</button>;
});

export default CorrectButton;