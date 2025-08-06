import { combineReducers } from "redux";
import { counterReducer } from "./countReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
    counter:counterReducer,
    auth:authReducer
})