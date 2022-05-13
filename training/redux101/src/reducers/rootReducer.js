import { REMOVE_STUDENT } from "../constants/actionTypes";

const initialState = {
    students: [
        { id: 1, name: "hadi" },
        { id: 2, name: "yousef" },
        { id: 3, name: "ahmad" },
        { id: 4, name: "ghanem" },
    ]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_STUDENT:
            let arr = state.students.filter(item => item.id !== parseInt(action.id));
            state.students = arr;
            break;
    
        default:
            break;
    }
    return state;
}
export default rootReducer;