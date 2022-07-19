import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTodo, removeTodo } from "../store/todo/todoActions";

function Todo() {
  const [content, setContent] = useState("");
  const todoList = useSelector((state) => state.todo);
  const { logined } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleInput = (event) => {
    setContent(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTodoList();
    }
  };

  const addTodoList = () => {
    if (!content) return;

    dispatch(addTodo({ description: content }));
    setContent("");
  };
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo({ id }));
  };
  return (
    <div>
      <div className="control-group">
        <label htmlFor="todo"></label>
        <input
          type="text"
          name="todo"
          id="todo"
          value={content}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
        <button className="add" onClick={addTodoList}>
          Add
        </button>
      </div>
      <div>
        {todoList.map((todo) => (
          <div key={todo.id}>
            <p>Task: {todo.description}</p>
            <p>Done: {String(todo.done)}</p>
            {logined && (
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            )}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
