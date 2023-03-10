import React, { useState } from "react";

function CounterWithPrevProps() {
  const [count, setCount] = useState(0);

  const handleClick = () => { // Will not increment count by 3, because on every set count it will take the same 0 value
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }
  
  const handleClickProper = () => { // Will increment by 3 because we are using prevCount value (value from previous  state)
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  }
  
  return (
    <section className="mt-3">
      <button className="me-3 btn btn-danger" onClick={handleClick}>Press to increment only by 1</button>
      <button className="me-3 btn btn-primary" onClick={handleClickProper}>Press to increment by 3</button>
      <span className="">Counter: {count}</span>
    </section>
  );
}

export default CounterWithPrevProps;