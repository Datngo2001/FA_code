import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as types from "../store/todo/todoActionTypes";

// import { fetchTodo, createTodo, removeTodo } from "../store/todo/todoActions";

function Todo() {
  const [content, setContent] = useState("");
  const { loading, list, error } = useSelector((state) => state.todo);
  // const { loading, list, error } = { loading: false, list: [], error: null };
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchTodo());
    dispatch({ type: types.FETCH_TODO_REQUEST });
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

    dispatch({
      type: types.CREATE_TODO_REQUEST,
      payload: { description: content, done: false },
    });
    //dispatch(createTodo({ description: content, done: false }));
    setContent("");
  };
  const handleRemoveTodo = (id) => {
    dispatch({ type: types.REMOVE_TODO_REQUEST, payload: id });
  };
  return (
    <div>
      <h1>My todos:</h1>
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
            {user && (
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            )}
            <hr />
          </div>
        ))}
        {loading && <div>...Loading</div>}
        {error && (
          <div style={{ color: "red", marginTop: "20px" }}>
            Some errors occur: &nbsp;{error.message}
          </div>
        )}
      </div>
    </div>
  );
}

export default Todo;
