import React from 'react';
const Form = (props) => {
  return (
    <form>
      <input 
        type="text" 
        placeholder="city name" 
        onChange={e => {props.setCity(e.target.value)}}
        />
      <button
        type="submit"
        onClick={e => {props.getWheather()}}
      >Get Whather</button>
    </form>
    
  );
};
export default Form;