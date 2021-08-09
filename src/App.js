import React, { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import axios from 'axios';
import './style.css';
// データの保管場所（都市名・国・気温・天気）

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
        'https://api.weatherapi.com/v1/current.json?key=123e2943a98346ad96431630210908&q=London&aqi=no'
      )
      .then(res => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <Title />
      <Form getWheather={getWheather} setCity={setCity} />
      <Results />
    </div>
  );
}
