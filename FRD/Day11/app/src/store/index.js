import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import allReducer from "./allReducer";
import createSagaMiddileware from "redux-saga"
import rootSaga from "./rootSaga";

const composeEnhancer = composeWithDevTools({ trace: true });
const sagaMiddleware = createSagaMiddileware()

export default createStore(allReducer, composeEnhancer(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga)