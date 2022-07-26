import React from "react";
import cat from "../asset/cat.png";

function Cat({ coordinate }) {
  return (
    <img
      src={cat}
      alt=""
      style={{
        position: "absolute",
        top: coordinate?.y,
        left: coordinate?.x,
      }}
    />
  );
}

export default Cat;
