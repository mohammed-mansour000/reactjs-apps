import { ACTION_TYPES } from '../actions/CandidateAction';

const initialState = {
    list: []
}

export const candidateReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state, 
                list: [...action.payload]
            }
        default:
            return state;
        break
    }
}