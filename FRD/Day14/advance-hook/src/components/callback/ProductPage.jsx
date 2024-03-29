import React, { useCallback, useState } from "react";
import ProductList from "./ProductList";

function ProductPage() {
  const [darkTheme, setDarkTheme] = useState(false);

  const style = {
    background: darkTheme ? "#333" : "#ddd",
    color: darkTheme ? "#fff" : "#000",
  };

  const handleItemClick = useCallback((id) => {
    console.log(darkTheme);
  }, []);

  return (
    <div style={style}>
      <h2>ProductPage</h2>
      <button onClick={() => setDarkTheme((val) => !val)}>Toggle Theme</button>
      <ProductList onItemClick={handleItemClick}></ProductList>
    </div>
  );
}

export default ProductPage;
