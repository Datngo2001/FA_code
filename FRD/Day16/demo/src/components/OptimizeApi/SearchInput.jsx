import React, { useState } from "react";
import _ from "lodash";
import { searchWiki } from "../services";
import { useCallback } from "react";

function SearchInput() {
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

  const searchThrottle = useCallback(
    _.throttle((keyword) => fetchData(keyword), 2000),
    []
  );

  const searchDebounce = useCallback(
    _.debounce((keyword) => fetchData(keyword), 2000),
    []
  );

  const handleSearchThrottle = () => {
    searchThrottle(searchTerm);
  };
  const handleSearchDebounce = () => {
    searchDebounce(searchTerm);
  };

  return (
    <div>
      <h2>SearchInput</h2>
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearchThrottle}>Search</button>
      <button onClick={handleSearchDebounce}>Search debounce</button>
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

export default SearchInput;
