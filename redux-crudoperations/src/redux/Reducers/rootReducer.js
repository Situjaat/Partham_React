import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducers";

export const rootReducer = combineReducers({
    auth:authReducer,
    user:userReducer,
})