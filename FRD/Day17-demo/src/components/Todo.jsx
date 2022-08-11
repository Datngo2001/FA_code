import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import * as types from "../store/todo/todoActionTypes";

function Todo() {
  const [content, setContent] = useState("");
  const { loading, list, error } = useSelector((state) => state.todo);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: types.FETCH_TODO_REQUEST,
    });
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
    setContent("");
  };
  const handleRemoveTodo = (id) => {
    // dispatch(removeTodo({ id }));
  };
  return (
    <Container className="mt-4">
      <h1 className="text-center">Todo</h1>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter your new todo..."
            value={content}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
          />
          <Button className="add" onClick={addTodoList}>
            Add
          </Button>
        </Form.Group>
      </Form>
      <div>
        {list.map((todo) => (
          <div key={todo.id}>
            <p>Task: {todo.description}</p>
            <p>Done: {String(todo.done)}</p>
            {user && (
              <Button onClick={() => handleRemoveTodo(todo.id)}>Remove</Button>
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
    </Container>
  );
}

export default Todo;
