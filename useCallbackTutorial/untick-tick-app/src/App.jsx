import React, { useState, useCallback } from 'react';
import CorrectButton from './components/CorrectButton';
import MisusedButton from './components/MisusedButton';
import NoCallbackButton from './components/NoCallbackButton';

function App() {
  const [isTicked, setIsTicked] = useState(false);
  const [count, setCount] = useState(0); // unrelated state

  // ✅ Correct: needed because passed to React.memo child
  const toggleTick = useCallback(() => {
    setIsTicked(prev => !prev);
  }, [isTicked]);

  // ⚠ Misuse: adding useCallback where NOT needed (small inline function, no prop passing)
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  // ❌ No useCallback: function passed directly, always re-created, breaks memo
  const badToggleTick = () => {
    setIsTicked(prev => !prev);
  };

  return (
    <div>
      <h1>{isTicked ? '✔️ Ticked' : '❌ Unticked'}</h1>
      <h2>Count: {count}</h2>

      <CorrectButton onToggle={toggleTick} />
      <MisusedButton onClick={increment} />
      <NoCallbackButton onToggle={badToggleTick} />
    </div>
  );
}

export default App;
