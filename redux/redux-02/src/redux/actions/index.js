import { INCREMENT, DECREMENT, LOG_IN, LOG_OUT, RESET, CLEAR_DATA } from '../constants';

export const increment  = () => {
    return {
        type: INCREMENT
    }
}
export const decrement  = () => {
    return {
        type: DECREMENT
    }
}
export const login  = () => {
    return {
        type: LOG_IN
    }
}
export const logout  = () => {
    return {
        type: LOG_OUT
    }
}
export const reset  = () => {
    return {
        type: RESET
    }
}

export const getData = () => {
   
    return function(dispatch) {
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "DATA_LOADED", payload: json });
        });
    };
}

export const clearData = () => {
    return {
        type: CLEAR_DATA
    }
}