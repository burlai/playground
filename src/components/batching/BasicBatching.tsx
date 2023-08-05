import React, { useState } from "react";

const BatchingExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // React batches state updates
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  console.log("Render:", count);

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default BatchingExample;
