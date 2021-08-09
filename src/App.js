import React, { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import Loading from './components/Loading';
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
  const [loading, setLoading] = useState(false);
  const getWheather = e => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=123e2943a98346ad96431630210908&q=${city}&aqi=no&lang=ja`
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
        setCity('');
        setLoading(false);
        
      }).catch(err => {
        console.log(err);
        setLoading(false);
        alert(err.message);
      }
      );
  };

  return (
    <div>
      <Title />
      <Form getWheather={getWheather} setCity={setCity} city={city}/>
      
      {loading ? <Loading />
        :<Results results={results} />}
    </div>
  );
}
