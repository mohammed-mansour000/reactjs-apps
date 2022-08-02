import { combineReducers } from "redux";
import exerciseReducer from "./exerciseReducers";
import youtubeSReducer from "./youtubeSReducer";
import bodypartsReducer from "./bodyPartsReducer";

const allReducers = combineReducers({
    exerciseReducer,
    youtubeSReducer,
    bodypartsReducer
});

export default allReducers;