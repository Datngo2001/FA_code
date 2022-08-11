import { combineReducers } from 'redux'
import userReducer from './reducer/user/userReducer'

export default combineReducers({
    user: userReducer
})