import Input from './components/Input';
import Result from './components/Result';
import './App.css';
import React, { useState } from 'react';
import Options from './components/Options';

function App() {
  const [options, setOptions] = useState({
    body: "",
    removeName: false,
    removeAddress: false,
    removeEmail: false,
    removePhone: false,
    removeDate: false,
    removePostalCode: false,
    removeGender: false,
    removePin: false,
    removeURL: false,
    removePostalCode: false
  })

  const handleSetOptions = (options) => {
    setOptions(options);
  }

  const handleClick = () => {
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
        <Result />
      </div>
    </div>
  );
}

export default App;
