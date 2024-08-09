import React, { useState } from 'react'

const InputForm = () => {
  const [textValue, setTextValue] = useState('');
  const [showValue, setShowValue] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setTextValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowValue(textValue);
  };
  
return (
  <form style={{ paddingTop: 20 }} onSubmit={handleSubmit}>
    <input name="text" type="text" placeholder='Enter text' value={textValue} onChange={handleChange} />
    <button type='submit'>Submit</button>
    <span>{showValue}</span>
  </form>
)};

export default InputForm;