import React from "react";
import withPagination from "./withPagination";

function TodoTable({ data }) {
  return (
    <div>
      {data.map((todo) => (
        <div
          key={todo.id}
          style={{
            border: "1px solid",
            margin: "5px 0px",
            padding: "5px",
          }}
        >
          <p>Title: {todo.title}</p>
          <p>Completed: {String(todo.completed)}</p>
        </div>
      ))}
    </div>
  );
}

export default withPagination(TodoTable, {
  entity: "todos",
});
