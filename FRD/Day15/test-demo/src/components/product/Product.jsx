import React from "react";

function Product({ items }) {
  return (
    <div>
      <h2>Product</h2>
      {items?.length > 0 ? (
        items.map((item) => <p>{item.name}</p>)
      ) : (
        <div>No Item</div>
      )}
    </div>
  );
}

export default Product;
