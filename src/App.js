import React from "react";
import Title from "./components/Title";
import Form from './components/Form';
import Results from './components/Results';
import "./style.css";
// データの保管場所（都市名・国・気温・天気）

export default function App() {
  return (
    <div>
      <Title />
      <Form />
      <Results />
    </div>
  );
}
