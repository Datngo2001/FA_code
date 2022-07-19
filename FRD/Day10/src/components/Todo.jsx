import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../api/_axios";

import {
  addTodo,
  createTodo,
  fetchTodo,
  removeTodo,
} from "../store/todo/todoActions";

function Todo() {
  const [content, setContent] = useState("");
  const { loading, list, error } = useSelector((state) => state.todo);
  const { logined } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

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

    dispatch(createTodo({ description: content, done: false }));
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
        {list.map((todo) => (
          <div key={todo.id}>
            <p>Task: {todo.description}</p>
            <p>Done: {String(todo.done)}</p>
            {logined && (
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            )}
            <hr />
          </div>
        ))}
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
      </div>
    </div>
  );
}

export default Todo;
