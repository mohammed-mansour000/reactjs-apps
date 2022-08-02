import { CLEAR_DATA, DATA_LOADED } from "../constants";

const dataReducer = (state = [], action)=> {
    switch (action.type) {
        case DATA_LOADED:
            return  {...state, remotePosts: [...action.payload]}
        case CLEAR_DATA:
            return state = [];
        default:
            return state;
    }
}

export default dataReducer;