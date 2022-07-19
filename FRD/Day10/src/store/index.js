import { createStore, applyMiddleware } from "redux";
import allReducer from "./allReducer";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnchancer = composeWithDevTools({ trade: true })

export default createStore(allReducer, composeEnchancer(applyMiddleware(thunk)));
