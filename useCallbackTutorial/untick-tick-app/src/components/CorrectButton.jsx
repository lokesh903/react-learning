import React from 'react';

const CorrectButton = React.memo(({ onToggle }) => {
  console.log('✅ CorrectButton re-rendered');
  return <button onClick={onToggle}>✅ Correct UseCallback</button>;
});

export default CorrectButton;
