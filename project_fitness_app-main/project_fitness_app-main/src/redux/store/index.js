import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import allReducers from "../reducers";


const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    allReducers,
    storeEnhancers(applyMiddleware(thunk))
);

export default store;

