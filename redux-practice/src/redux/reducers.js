const intialState = {
    user:null,
}

export const authReducer = (state = intialState, action) => {
    switch (action.type) {
        case "LOGIN":
        return {
            ...state,
            user:action.payload
        };

        case "LOGOUT":
            return {
                ...state,
                user:null,
            };
            default:
                return state;
    }
}