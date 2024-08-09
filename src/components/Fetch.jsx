import React, { useState, useReducer } from 'react';
// import axios from "axios";
// const axios = require('axios');

const initialState = {
  error: null,
  greeting: null,
}

const greetingReducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS': {
      return {
        error: null,
        greeting: action.greeting,
      }
    }
    case 'ERROR': {
      return {
        error: action.error,
        greeting: null,
      }
    }
    default: {
      return state
    }
  }
}

const Fetch = () => {
  const [{error, greeting}, dispatch] = useReducer(
    greetingReducer,
    initialState,
  )
  const [buttonClicked, setButtonClicked] = useState(false)

  const fetchGreeting = async () => {
    try {
      dispatch({ type: 'SUCCESS', greeting: {
        count: 21,
        name: "Kanishk",
        age: 34
      }});
      // const response = await axios.get('https://api.agify.io/?name=meelad');
      // dispatch({ type: 'SUCCESS', greeting: response?.data });
      setButtonClicked(true);
    } catch (error) {
      dispatch({ type: 'ERROR', error });
    }
  };

  const buttonText = buttonClicked ? 'Ok' : 'Load Greeting'

  return (
    <div>
      <button onClick={fetchGreeting} disabled={buttonClicked}>
        {buttonText}
      </button>
      {greeting?.name && <h1>{greeting?.name}</h1>}
      {error && <p role="alert">Oops, failed to fetch!</p>}
    </div>
  )
};

export default Fetch;