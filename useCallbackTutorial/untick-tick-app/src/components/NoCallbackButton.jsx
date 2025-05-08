// NoCallbackButton.jsx
import React, { useEffect } from 'react';

const NoCallbackButton = React.memo(({ onClick }) => {
  console.log('❌ Child <NoCallbackButton> re-rendered');

  useEffect(() => {
    const heavyComputation = () => {
      let total = 0;
      for (let i = 0; i < 1e8; i++) {
        total += i;
      }
      console.log('✅ Heavy computation in <NoCallbackButton> done:', total);
    };

    heavyComputation();
  }, []); // Run only once when the button mounts

  return <button onClick={onClick}>NoCallback Button</button>;
});

export default NoCallbackButton;