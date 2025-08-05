import { useReducer } from "react";

const intialState = {
    name:"",
    email:"",
    isSubscribed:false,
};

function formReducer(state, action) {
    switch (action.type) {
        case "update_field":
            return {...state, [action.field] : action.value};
            case "toggle_subscription":
            return {...state, isSubscribed: !state.isSubscribed};
            default:
                return state;
    }
}

function ComplexForm() {
    const [state, dispatch] = useReducer(formReducer, intialState);

    return (
        <form>
            <h1> Use Reducer</h1>
            <input type="text" placeholder="Name" value={state.name} onChange={e => 
                dispatch({type: "update_field", field: "name", value: e.target.value})
            } />

            
                <input type="email" placeholder="Email" value={state.email} onChange={e => 
                    dispatch({type: "update_field", field: "email", value:e.target.value})
                } />
            
                <label>
                    <input type="checkbox" checked={state.isSubscribed} onChange={() => 
                        dispatch ({type:"toggle_subscription"})
                    } />
                    Subscribe to newslatter
                </label>

                <pre> {JSON.stringify(state, null,2)}</pre>
        </form>
    )
}

export default ComplexForm