export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("reduxstate", serializedState);
    } catch (e) {
        console.error("Could not save state", e);
        
    }
};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("reduxstate");
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.error("could not load state", e);
        return undefined;    
    }
};
