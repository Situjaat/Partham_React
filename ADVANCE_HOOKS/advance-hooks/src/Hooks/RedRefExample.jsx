import React, { useReducer, useRef } from 'react';

const initialState = {
  name: '',
  email: '',
  errors: {
    name: '',
    email: '',
  },
};

function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
        errors: {
          ...state.errors,
          [action.field]: '',
        },
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export default function SmartForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const nameRef = useRef();
  const emailRef = useRef();

  const validate = () => {
    const errors = {};
    if (!state.name.trim()) errors.name = 'Name is required';
    if (!state.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(state.email)) errors.email = 'Invalid email';
    return errors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errors = validate();

    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'SET_ERRORS', errors });

      // Autofocus on first invalid field
      if (errors.name) nameRef.current.focus();
      else if (errors.email) emailRef.current.focus();
      return;
    }

    alert('Form submitted successfully!');
    dispatch({ type: 'RESET' });
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label>Name:</label>
        <input
          ref={nameRef}
          type="text"
          value={state.name}
          onChange={e =>
            dispatch({
              type: 'UPDATE_FIELD',
              field: 'name',
              value: e.target.value,
            })
          }
        />
        {state.errors.name && (
          <div style={{ color: 'red' }}>{state.errors.name}</div>
        )}
      </div>

      <div>
        <label>Email:</label>
        <input
          ref={emailRef}
          type="email"
          value={state.email}
          onChange={e =>
            dispatch({
              type: 'UPDATE_FIELD',
              field: 'email',
              value: e.target.value,
            })
          }
        />
        {state.errors.email && (
          <div style={{ color: 'red' }}>{state.errors.email}</div>
        )}
      </div>

      <button type="submit">Submit</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </form>
  );
}

