const initialState = {
    userData: [],
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GETUSER":
            return {
                ...state,
                userData: action.payload
            };

        case "DELETE":
            return {
                ...state,
                userData: action.payload,
            };

        case "UPDATE":
            return {
                ...state,
                userData: action.payload,
            }

        default:
            return state;
    }
}