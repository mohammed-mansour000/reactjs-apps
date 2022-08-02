import { FETCH_EXERCISES, FETCH_EXERCISE_BY_EXERCISE_ID, FILTER_SEARCHED_EXERCISES } from "../constants";


const initialState = {
        exerciseList: [],
        exerciseDetails: null
    }

const exerciseReducer = (state = initialState, action) =>{
        switch (action.type) {
                case FETCH_EXERCISES:
                        return {state, exerciseList: [...action?.payload]}
                case FILTER_SEARCHED_EXERCISES:
                        
                        var newData = {...state}
                        newData.exerciseList = action.payload.data.filter(
                                (item) => item?.name?.toLowerCase().includes(action.payload.searchItem)
                                       || item?.target?.toLowerCase().includes(action.payload.searchItem)
                                       || item?.equipment?.toLowerCase().includes(action.payload.searchItem)
                                       || item?.bodyPart?.toLowerCase().includes(action.payload.searchItem),
                        );
                        state = newData;
                        
                        return state;
                case FETCH_EXERCISE_BY_EXERCISE_ID:                        
                        return { ...state,  exerciseDetails: action.payload };
                default:
                        return state;
                }
        return state;
}

export default exerciseReducer;