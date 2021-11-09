import { combineReducers } from "redux";
import { candidateReducer } from "./CandidateReducer";

export const reducers = combineReducers({ //here we pass all reducers, in our app there is one
    candidateReducer
})