import { ADD_TODO, REMOVE_TODO } from "./todoActionTypes";

export function addTodo(payload) {
  return {
    type: ADD_TODO,
    payload,
  };
}

export const removeTodo = (payload) => ({ type: REMOVE_TODO, payload });
