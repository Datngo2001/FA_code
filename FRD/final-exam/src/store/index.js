import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddileware from "redux-saga"
import allReducer from "./allReducer"
import rootSaga from "./rootSaga"

const composeEnhancer = composeWithDevTools({ trace: true })
const sagaMiddileware = createSagaMiddileware()

export default createStore(allReducer, composeEnhancer(applyMiddleware(sagaMiddileware)))

sagaMiddileware.run(rootSaga)