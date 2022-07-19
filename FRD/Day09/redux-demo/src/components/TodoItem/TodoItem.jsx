import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodoAction } from "../../store/todoAction";
import styles from "./todoItem.module.css";
function TodoItem({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIdEditing] = useState(false);
  const [input, setInput] = useState({ newName: task.name });

  const handleInput = (e) => {
    setInput((val) => ({ ...val, [e.target.name]: e.target.value }));
  };

  const tougleEdit = () => {
    setIdEditing((val) => !val);
  };

  const handleRemove = () => {
    dispatch({
      type: "REMOVE_TODO",
      payload: {
        id: task.id,
      },
    });
  };

  const handleEditting = () => {
    tougleEdit();
  };

  const handleCancel = () => {
    tougleEdit();
    setInput((val) => ({ ...val, newName: task.name }));
  };

  const handleSave = () => {
    dispatch(
      updateTodoAction({
        id: task.id,
        name: input.newName,
      })
    );
    tougleEdit();
  };

  return (
    <div className={styles["todo-item"]}>
      {isEditing ? (
        <div className={styles["edit-todo"]}>
          <input
            name="newName"
            type="text"
            className="form-control"
            onChange={handleInput}
            value={input.newName}
          />
          <button className="btn btn-success" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-warning" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      ) : (
        <div className={styles["todo-task"]} onDoubleClick={handleEditting}>
          <div>{task.name}</div>
        </div>
      )}
      <button className="btn btn-danger" onClick={handleRemove}>
        X
      </button>
    </div>
  );
}

export default TodoItem;
