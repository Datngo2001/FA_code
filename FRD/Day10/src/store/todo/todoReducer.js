import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "./todoActionTypes";

const initValue = [
  {
    id: 1,
    description: "Learn React",
    done: false,
  },
];
let id = initValue.length;
export default function todoReducer(state = initValue, { type, payload }) {
  switch (type) {
    case ADD_TODO:
      return [...state, { ...payload, id: ++id, done: false }];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== payload.id);

    default:
      return state;
  }
}
