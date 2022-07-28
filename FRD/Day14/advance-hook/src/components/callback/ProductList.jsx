import React from "react";

function ProductList({ onItemClick }) {
  console.log("Render");
  const idlist = [...Array(20).keys()];

  const Products = (
    <div>
      {idlist.map((item) => (
        <div key={item}>
          <h3>Profuct id: {item}</h3>
          <button onClick={() => onItemClick(item)}>Add to cart </button>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <h2>ProductList</h2>
      {Products}
    </div>
  );
}

export default React.memo(ProductList);
