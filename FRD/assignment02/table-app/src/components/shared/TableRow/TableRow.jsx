import React from "react";

function TableRow({ values }) {
  if (!values) {
    return <tr></tr>;
  }
  return (
    <tr>
      {values.map((val, i) => (
        <td key={i}>{val}</td>
      ))}
    </tr>
  );
}

export default TableRow;
