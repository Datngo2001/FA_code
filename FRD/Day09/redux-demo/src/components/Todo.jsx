import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Todo() {
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state);

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState({ task: "" });

  const handleInputChange = (e) => {
    setInput((val) => ({
      ...val,
      [e.target.name]: e.target.value,
    }));
  };

  const addTask = () => {
    dispatch({
      type: "ADD_TODO",
      payload: {
        name: input.task,
        done: false,
      },
    });
    // setTasks((val) => [...val, { name: input.task, done: false }]);
  };

  return (
    <div>
      <h1>Todo</h1>
      <input
        name="task"
        type="text"
        value={input.task}
        onChange={handleInputChange}
      />
      <button onClick={addTask}>Add</button>
      <div>
        {todoState.map((task, index) => (
          <div key={index}>{task.name}</div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
