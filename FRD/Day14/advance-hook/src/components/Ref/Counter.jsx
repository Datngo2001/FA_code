import React, { useEffect, useRef, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  let preveousRefCount = useRef();

  useEffect(() => {
    console.log("Render");

    preveousRefCount.current = count;
    console.log(preveousRefCount.current);
  }, [count]);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <h2>Preveous count: {preveousRefCount.current}</h2>
      <button
        onClick={() => {
          setCount((val) => ++val);
        }}
      >
        add
      </button>
    </div>
  );
}

export default Counter;
