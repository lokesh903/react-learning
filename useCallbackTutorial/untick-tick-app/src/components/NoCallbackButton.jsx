// NoCallbackButton.jsx
import React, { useEffect } from 'react';

const NoCallbackButton = React.memo(({ onToggle }) => {
  console.log('❌ Child <NoCallbackButton> re-rendered');

  const heavyComputation = () => {
    let total = 0;
    for (let i = 0; i < 1e8; i++) {
      total += i;
    }
    console.log('✅ Heavy computation in <NoCallbackButton> done:', total);
  };

  heavyComputation();
  return <button onClick={onToggle}>NoCallback Button</button>;
});
    
export default NoCallbackButton;
