const initialState = {
    students: [
        { id: 1, name: "Anas" },
        { id: 2, name: "Hamzi" },
        { id: 3, name: "ahmad" },
        { id: 4, name: "hussien" },
        { id: 5, name: "amin" }
    ],
    teacher: [
        { id: "6", name: "mohammed" }
    ]
}

const rootReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case 'REMOVE_REDUCER':
            alert(state.students.length)
        
            var newData = {...state}
            newData.students = state.students.filter(e => e.id !== action.id);
            state = newData;
            
            alert(state.students.length)

            break;
    }
    return state;
}

export default rootReducer;