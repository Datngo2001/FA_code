import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import todoReducer from "./todo/todoReducer"

export default combineReducers({
  user: userReducer,
  todo: todoReducer
});
