import React, { useState } from "react";

const BatchingPromisesExample = () => {
  const [count, setCount] = useState(0);

  const handlePromiseClick = () => {
    // Simulating a promise resolution
    Promise.resolve().then(() => {
      // This state update is also batched in React 18
      setCount(count + 1);
      console.log("Promise:", count);
    });
  };

  console.log("Render:", count);

  return (
    <div>
      <button onClick={handlePromiseClick}>Increment with Promise</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default BatchingPromisesExample;
