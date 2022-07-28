import React, { useEffect, useRef } from "react";

function CustomInput() {
  const refInput = useRef();
  useEffect(() => {
    refInput.current.focus();
  }, []);
  return (
    <div>
      <h2>Custom input</h2>
      <input ref={refInput} type="text" />
    </div>
  );
}

export default CustomInput;
