import React from "react";

function ProductList({ onItemClick }) {
  console.log("ProductList rendered");
  const idList = [...Array(20).keys()];

  const products = (
    <div>
      {idList.map((id) => (
        <div
          key={id}
          style={{
            border: "2px solid #ccc",
            padding: "20px",
            margin: "20px",
          }}
        >
          <h3>Product id: {id}</h3>
          <button onClick={() => onItemClick(id)}>Add to cart</button>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <h2>ProductList</h2>
      <div>{products}</div>
    </div>
  );
}

export default React.memo(
  ProductList,
  (prev, next) => prev.onItemClick === next.onItemClick
);
