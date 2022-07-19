import { ADD_TODO, UPDATE_TODO } from "./todoActionType";

export function addTodoAction({ id, name, done }) {
    return {
        type: ADD_TODO,
        payload: {
            id: id,
            name: name,
            done: done,
        },
    }
}

export function updateTodoAction({ id, name }) {
    return {
        type: UPDATE_TODO,
        payload: {
            id: id,
            name: name,
        },
    }
}