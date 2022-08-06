import React from "react";
import SearchInputDebounce from "./SearchInputDebounce";
import SearchInputThottle from "./SearchInputThottle";

function NewOptimizeApi() {
  return (
    <div>
      <h1>OptimizeApi</h1>
      <SearchInputThottle />
      <SearchInputDebounce />
    </div>
  );
}

export default NewOptimizeApi;
