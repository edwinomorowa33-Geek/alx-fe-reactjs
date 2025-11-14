// src/components/Counter.jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '15px',
        margin: '15px',
        borderRadius: '8px',
        textAlign: 'center',
      }}
    >
      <p style={{ fontSize: '20px' }}>Current Count: {count}</p>

      <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px' }}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)} style={{ marginRight: '10px' }}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
