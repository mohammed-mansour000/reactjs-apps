import { fetchData } from "../../utils/fetchData";
import { FILTER_SEARCHED_EXERCISES, SET_BODY_PART_ITEM } from "../constants";

//exercises
export const filterSearchedExercises = (payload) => {
    return {
        type: FILTER_SEARCHED_EXERCISES,
        payload
    }
}

export const getData =  (url, options, actionType, searchItem = '') => {
   
    return async function(dispatch) {

        const data = await fetchData(url, options);

        if(searchItem){
            return dispatch({ type: actionType, payload: { data, searchItem } });
        }
        
        return dispatch({ type: actionType, payload: data });
    };
}

//bodyparts
export const setBodyPartAction = (payload) => {
    return {
        type: SET_BODY_PART_ITEM,
        payload
    }
}