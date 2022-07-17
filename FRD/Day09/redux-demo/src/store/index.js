import { createStore } from 'redux'
import todoReducer from './todoReducer'

export default createStore(todoReducer)