import _ from "lodash";
import React from "react";
import { useCallback, useState } from "react";
import { searchWiki } from "../services";

function SearchInputDebounce() {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async (keyword) => {
    console.log("called fetchData");
    if (keyword.trim()) {
      const data = await searchWiki(keyword);
      setResults(data);
    } else {
      setResults([]);
    }
  };

  const searchDebounce = useCallback(
    _.debounce((keyWord) => fetchData(keyWord), 500),
    []
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    searchDebounce(searchTerm);
  };

  return (
    <div>
      <h2>SearchInput</h2>
      <input type="search" value={searchTerm} onChange={handleSearchChange} />
      {results.length > 0 && (
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute" }}>
            {results.map((item) => (
              <div
                key={item.title}
                style={{ border: "1px solid #dedede", padding: "5px 10px" }}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchInputDebounce;
