import React from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./products.module.css";

function Products() {
  const [searchParam] = useSearchParams();
  const name = searchParam.get("name");
  const page = searchParam.get("page");
  return (
    <div className={styles.page}>
      <input
        className={styles.seachBox}
        type="search"
        name=""
        id=""
        value={name}
      />
      <h2>Page: {page}</h2>
    </div>
  );
}

export default Products;
