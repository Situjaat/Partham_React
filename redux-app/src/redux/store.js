// import { counterReducer } from "../redux/Reducers/countReducer";
import {legacy_createStore as createStore} from "redux";
import { rootReducer } from "./Reducers/rootReducer";
import { loadState, saveState } from "./Reducers/localStorage";

// const store = createStore(counterReducer);
const persistedState = loadState();

 const store = createStore(
    //  counterReducer,
    rootReducer,
    persistedState,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
 );
 store.subscribe(() => {
    saveState(store.getState());
 });

export default store;