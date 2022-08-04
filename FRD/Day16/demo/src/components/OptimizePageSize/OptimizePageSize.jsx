import React, { useState, Suspense } from "react";
const Counter = React.lazy(() => import("./Counter"));
const LabelSection = React.lazy(() => import("./LabelSection"));

function OptimizePageSize() {
  const [showCounter, setShowCounter] = useState(false);

  return (
    <div>
      <h2>OptimizePageSize</h2>
      <button onClick={() => setShowCounter((v) => !v)}>Toggle counter</button>
      {showCounter && (
        <Suspense fallback={<div>Loading counter</div>}>
          <Counter />
        </Suspense>
      )}
      <Suspense fallback={<div>Loading label...</div>}>
        <LabelSection />
      </Suspense>
    </div>
  );
}

export default OptimizePageSize;
