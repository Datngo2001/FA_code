import React from "react";

function TableHeader({ colName }) {
  if (!colName) {
    return <tr></tr>;
  }
  return (
    <tr>
      {colName.map((col, i) => (
        <th key={i} scope="col">
          {col}
        </th>
      ))}
    </tr>
  );
}

export default TableHeader;
