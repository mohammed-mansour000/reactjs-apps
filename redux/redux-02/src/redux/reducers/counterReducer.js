import { DECREMENT, INCREMENT, RESET } from "../constants";

const counterReducer = (state = 1, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1;
        case RESET:
            return (state = 0);
        default:
            return state;
       
    }
}

export default counterReducer;