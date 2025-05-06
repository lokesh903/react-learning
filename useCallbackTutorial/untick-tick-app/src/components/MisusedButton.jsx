import React from 'react';

const MisusedButton = React.memo(({ onClick }) => {
  console.log('⚠ MisusedButton re-rendered');
  return <button onClick={onClick}>⚠ Misused UseCallback</button>;
});

export default MisusedButton;
