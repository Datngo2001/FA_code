import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../../store/todoAction";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./todo.module.css";

function Todo() {
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state);

  const [input, setInput] = useState({ name: "" });

  const handleInputChange = (e) => {
    setInput((val) => ({
      ...val,
      [e.target.name]: e.target.value,
    }));
  };

  const addTask = (e) => {
    e.preventDefault();
    dispatch(
      addTodoAction({
        id: Symbol(),
        name: input.name,
        done: false,
      })
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form className={styles["form"]} onSubmit={addTask}>
        <input
          name="name"
          type="text"
          value={input.name}
          onChange={handleInputChange}
          className="form-control"
        />
        <input type="submit" className="btn btn-primary" value="Add" />
      </form>
      <div className={styles["todo-container"]}>
        {todoState.tasks.map((task, index) => (
          <TodoItem key={index} task={task}></TodoItem>
        ))}
      </div>
    </div>
  );
}

export default Todo;
