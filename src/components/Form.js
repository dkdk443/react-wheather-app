import React from 'react';
import {useState} from 'react';
import axios from 'axios';


const Form = () => {
  const [city, setCity] = useState('');
  const chaneHandler = (e) => {
    setCity(e.target.value);
  }
  const getWheather = (e) => {
    e.preventDefault();
    axios.get('https://api.weatherapi.com/v1/current.json?key=123e2943a98346ad96431630210908&q=London&aqi=no')
    .then(res => {console.log(res.data)})
  }

  return (
    <form>
      <input 
        type="text" 
        placeholder="city name" 
        value={city}
        onChange={e =>chaneHandler(e)}
        />
      <button
        type="submit"
        onClick={getWheather}
      >Get Whather</button>
    </form>
    
  );
};
export default Form;