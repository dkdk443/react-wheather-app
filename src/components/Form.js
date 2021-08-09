import React from 'react';
const Form = (props) => {
  return (
    <form
    onSubmit={e => {props.getWheather(e)}}
    >
      <input 
        type="text" 
        placeholder="city name" 
        onChange={e => {props.setCity(e.target.value)}}
        />
      <button
        type="submit" 
      >Get Whather</button>
    </form>
    
  );
};
export default Form;