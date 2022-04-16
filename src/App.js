import Input from './components/Input';
import Result from './components/Result';
import './App.css';
import React, { useState } from 'react';
import Options from './components/Options';
import axios from "axios";

function App() {
  const [options, setOptions] = useState({
    body: "",
    removeName: false,
    removeAddress: false,
    removeEmail: false,
    removePhone: false,
    removeDate: false,
    removeGender: false,
    removePin: false,
    removeURL: false,
    removePostalCode: false
  })

  const [result, setResult] = useState("");

  const handleSetOptions = (options) => {
    setOptions(options);
  }

  const handleClick = () => {
    axios.post('http://127.0.0.1:5000', options)
      .then(res => {
        setResult(res.data);
      })
      .catch(err => {
        console.log(err);
      })
    console.log(options);
  }

  return (
    <div className="App">
      <div className='heading'>
        <h1>blurked</h1>
      </div>
      <div className='mainCnt'>
        <Input handleSetOptions={handleSetOptions} options={options} />
        <Options options={options} setOptions={setOptions} handleSetOptions={handleSetOptions} handleClick={handleClick} />
        <Result result={result}/>
      </div>
    </div>
  );
}

export default App;
