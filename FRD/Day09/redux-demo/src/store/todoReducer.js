const initValue = [];

export default function todoReducer(state = initValue, { type, payload }) {
    switch (type) {
        case 'ADD_TODO':
            return [...state, payload]
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== payload.id)
        default:
            return state;
    }
}