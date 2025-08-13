// import { counterReducer } from "../redux/Reducers/countReducer";
import {legacy_createStore as createStore} from "redux";
import { rootReducer } from "./Reducers/rootReducer";


 const store = createStore(
    //  counterReducer,
    rootReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
 );

export default store;
