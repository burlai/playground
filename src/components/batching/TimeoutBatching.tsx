import React, { useState } from "react";

const BatchingAsyncExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      // This state update is also batched
      setCount(count + 1);
      console.log("Async:", count);
    }, 0);
  };

  console.log("Render:", count);

  return (
    <div>
      <button onClick={handleClick}>Increment Async</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default BatchingAsyncExample;
