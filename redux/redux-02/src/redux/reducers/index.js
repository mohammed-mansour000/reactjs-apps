import { combineReducers } from "redux";
import authReducer from "./authReducer";
import counterReducer from "./counterReducer";
import dataReducer from "./dataReducer";

const allReducers = combineReducers({
    authReducer,
    counterReducer,
    dataReducer
});

export default allReducers;