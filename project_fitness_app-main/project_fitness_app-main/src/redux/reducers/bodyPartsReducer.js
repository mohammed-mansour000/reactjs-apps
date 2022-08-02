import { FETCH_BODY_PART_LIST, SET_BODY_PART_ITEM } from "../constants"

const initialState = {
    bodyPartList: [],
    bodyPart: 'all'
}
const bodypartsReducer = (state = initialState, action) => {
   switch(action.type){
    case FETCH_BODY_PART_LIST:
        return {
            ...state,
            bodyPartList: ['all', ...action.payload],
        };
    case SET_BODY_PART_ITEM:
        return {
            ...state,
            bodyPart: action.payload
        }
    default: 
        return state;
   }
}

export default bodypartsReducer;