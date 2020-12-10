import React, { useState } from 'react';

function useForm(initialVal = {}) {
  const [state, setState] = useState(initialVal);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const reset = () => {
    if (typeof state === 'object') {
      for (let x in state) {
        state[x] = '';
      }
    } else {
      setState('');
    }
  };
  return [state, handleChange, reset, setState];
}

export default useForm;
