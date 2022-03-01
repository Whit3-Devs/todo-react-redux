// Importamos las acciones



// REDUCER

const initialState = {
    users: [],
    message: "",
}

// Tambien podemos hacer un destructuring de actions
export const rootReducer = ( state = initialState, { type, payload }) => {

    switch (type) {
        case 'SET_TASK':
            return { ...state, message: payload}
        case 'ADD_TASK':
            return { ...state, message: payload}
        default:
            return state;
    }

}