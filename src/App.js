import React, { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import axios from 'axios';
import './style.css';

export default function App() {
  const [city, setCity] = useState('');
  const [results, setResults] = useState({
    country: '',
    cityName: '',
    templeture: '',
    icon : '',
    conditionText: ''
  });
  const getWheather = e => {
    e.preventDefault();
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=123e2943a98346ad96431630210908&q=${city}&aqi=no`
      )
      .then(res => {
        console.log(res.data);
        let current = res.data.current;
        let location = res.data.location;
        setResults({
          country: location.country,
          cityName: location.name,
          templeture: current.temp_c,
          icon : current.condition.icon,
          conditionText: current.condition.text
        })
        setResults('');
      }).catch(err => {
        console.log(err);
        alert(err.message);

      }
      );
  };

  return (
    <div>
      <Title />
      <Form getWheather={getWheather} setCity={setCity} />
      <Results results={results} />
    </div>
  );
}
