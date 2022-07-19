import React, { useState } from "react";
import { UsersAPI } from "../../api";
import SortBox from "../shared/SortBox/SortBox";
import Pagination from "../shared/Pagination/Pagination";
import { useEffect } from "react";
import styles from "./usertable.module.css";
import Table from "../shared/Table/Table";
import { toDDMMYYYY } from "../../util/DateUtil";

function UserTable() {
  const [table, setTable] = useState({
    query: "",
    page: 1,
    limit: 10,
    totalPage: 1,
    sortBy: "id",
    users: [],
  });

  useEffect(() => {
    UsersAPI.searchUser({
      query: table.query,
      page: table.page,
      limit: table.limit,
      sortBy: table.sortBy,
    })
      .then((res) => {
        let formated = processData(res.data);
        setTable((val) => ({
          ...val,
          users: formated,
          totalPage: res.totalPage,
        }));
      })
      .catch((err) => console.log(err));
  }, [table.page, table.limit, table.query, table.sortBy]);

  const getColumnName = () => {
    return [
      "Id",
      "First Name",
      "Last Name",
      "Email",
      "Gender",
      "Birthday",
      "Salary",
      "Phone",
    ];
  };

  const processData = (users) => {
    users.forEach((user) => {
      user.birthday = toDDMMYYYY(user.birthday);
      user.phone = user.phone.replaceAll("-", "");
    });
    return users;
  };

  const handleSortBoxSelect = (selected) => {
    setTable((val) => ({ ...val, sortBy: selected }));
  };

  const handlePageSelect = (selected) => {
    setTable((val) => ({ ...val, page: selected }));
  };

  const handleSearch = (e) => {
    setTable((val) => ({ ...val, query: e.target.value }));
  };

  return (
    <div>
      <div className={styles["tool-bar"]}>
        <div className={styles["sortbox-container"]}>
          <SortBox
            options={getColumnName()}
            values={
              table.users.length ? Object.keys(table.users[0]) : getColumnName()
            }
            handleSelect={handleSortBoxSelect}
          ></SortBox>
        </div>
        <div className={styles["search-container"]}>
          <input
            type="text"
            className="form-control"
            placeholder="Search ..."
            onChange={handleSearch}
          ></input>
        </div>
      </div>
      <div className={styles["table-container"]}>
        <Table data={table.users} columnName={getColumnName()}></Table>
      </div>
      <div className={styles["pagination-container"]}>
        <Pagination
          page={table.page}
          total={table.totalPage}
          handleSelect={handlePageSelect}
        ></Pagination>
      </div>
    </div>
  );
}

export default UserTable;
