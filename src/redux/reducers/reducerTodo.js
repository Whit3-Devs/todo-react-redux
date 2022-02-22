// Importamos las acciones



// REDUCER

const initialState = {
    users: [],
    message: "",
}

// Tambien podemos hacer un destructuring de actions
export const rootReducer = ( state = initialState, { type, payload }) => {

    switch (type) {
        case 'SET_MESSAGE':
            return { ...state, message: payload}
        default:
            return state;
    }

}