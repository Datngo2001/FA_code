import React from "react";
import { useState } from "react";

function Mouse({ render }) {
  const [coordinate, setCoordinate] = useState({
    x: 0,
    y: 0,
  });

  const handleMove = (e) => {
    setCoordinate({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div
      style={{ height: "100vh", position: "relative" }}
      onMouseMove={handleMove}
    >
      {render(coordinate)}
    </div>
  );
}

export default Mouse;
