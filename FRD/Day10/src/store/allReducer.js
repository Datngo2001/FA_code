import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import todoReducer from "./todo/todoReducer";

export default combineReducers({
  todo: todoReducer,
  user: userReducer,
});
