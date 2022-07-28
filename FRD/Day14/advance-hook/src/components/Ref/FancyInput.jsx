import React from "react";

function FancyInput(props, ref) {
  return (
    <div>
      <div>
        <h2>Fancy input</h2>
        <input ref={ref} type="text" />
      </div>
    </div>
  );
}

export default React.forwardRef(FancyInput);
