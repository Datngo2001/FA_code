import React from "react";
import { useState, useEffect } from "react";
import { apiInstance, getUsers } from "../api";

function withSearch(
  WrappedComponent,
  options = {
    entity: "",
    searchField: "",
  }
) {
  function WithSearch() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
      apiInstance.get(`/${options.entity}`).then((res) => {
        setData(() => res.data);
      });
    }, []);
    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    };

    const fillterData = () => {
      return data.filter((user) =>
        user[options.searchField].toLowerCase().includes(searchTerm)
      );
    };

    return (
      <div>
        <input type="text" onChange={handleChange} value={searchTerm} />
        <WrappedComponent list={fillterData()}></WrappedComponent>
      </div>
    );
  }
  return WithSearch;
}

export default withSearch;
