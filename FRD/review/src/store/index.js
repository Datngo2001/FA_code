import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import allReducer from "./allReducer";
import rootSaga from "./rootSaga";
import createSagaMiddileware from "redux-saga"


const composeEnhancer = composeWithDevTools({ trace: true });
const sagaMiddileware = createSagaMiddileware()

export default createStore(allReducer, composeEnhancer(applyMiddleware(sagaMiddileware)))

sagaMiddileware.run(rootSaga)