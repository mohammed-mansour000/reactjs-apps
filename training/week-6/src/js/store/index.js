import { createStore , applyMiddleware , compose   } from "redux";
import thunk from "redux-thunk";
import { forbiddenWordsMiddleware } from "../middleware";
import rootReducer from "../reducers/index";
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore
                    (
                        rootReducer,
                        //applyMiddleware(forbiddenWordsMiddleware)
                        storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
                    );

export default store;