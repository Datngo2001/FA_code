import React, { useCallback, useState } from "react";
import ProductList from "./ProductList";

function ProductPage() {
  const [darkTheme, setDarkTheme] = useState(false);

  const styles = {
    background: darkTheme ? "#333" : "#ddd",
    color: darkTheme ? "#fff" : "#000",
    padding: "20px",
  };

  const handleClickItem = (id) => {
    console.log("You clicked at product ", id);
  };

  // const handleClickItem = useCallback((id) => {
  //   console.log("You clicked at product ", id);
  // }, []);

  return (
    <div style={styles}>
      <h2>ProductPage</h2>
      <button onClick={() => setDarkTheme((v) => !v)}>Toggle theme</button>

      <ProductList onItemClick={handleClickItem} />
    </div>
  );
}

export default ProductPage;
