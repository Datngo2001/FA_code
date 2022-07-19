import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./todoActionType";

const initValue = { tasks: [] };

export default function todoReducer(state = initValue, { type, payload }) {
    switch (type) {
        case ADD_TODO:
            state.tasks.push(payload)
            return { ...state }
        case REMOVE_TODO:
            state.tasks = state.tasks.filter(task => task.id !== payload.id)
            return { ...state }
        case UPDATE_TODO:
            const updateTask = state.tasks.find(task => task.id === payload.id)
            updateTask.name = payload.name
            return { ...state }

        default:
            return state;
    }
}