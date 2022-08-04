import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount((preCount) => preCount + 1);
  };

  return (
    <div>
      <h2>Value: {count}</h2>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  );
}

export default Counter;
