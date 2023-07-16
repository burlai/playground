import React, { useState } from "react";

interface CounterInterface {
  initialCount: number;
}

const virtualDOMElement = {
  type: "div",
  props: {
    children: [
      {
        type: "div",
        props: {
          className: "mb-2",
          children: ["Count: ", "count"],
        },
      },
      {
        type: "button",
        props: {
          className: "btn btn-primary d-inline-block me-2",
          onClick: "increment",
          children: "Increment",
        },
      },
      {
        type: "button",
        props: {
          className: "btn btn-secondary d-inline-block",
          onClick: "decrement",
          children: "Decrement",
        },
      },
    ],
  },
};

const Counter: React.FC<CounterInterface> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div className="mb-2">Count: {count}</div>
      <button
        className="btn btn-primary d-inline-block me-2"
        onClick={increment}
      >
        Increment
      </button>
      <button className="btn btn-secondary d-inline-block" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
