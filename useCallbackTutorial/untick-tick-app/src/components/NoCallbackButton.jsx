import React from 'react';

const NoCallbackButton = React.memo(({ onToggle }) => {
  console.log('❌ NoCallbackButton re-rendered');
  return <button onClick={onToggle}>❌ Missing UseCallback</button>;
});

export default NoCallbackButton;
