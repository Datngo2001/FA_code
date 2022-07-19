import React from "react";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";

function Table({ data, columnName }) {
  return (
    <table className={"table"}>
      <thead>
        <TableHeader colName={columnName}></TableHeader>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <TableRow key={i} values={Object.values(item)}></TableRow>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
