import React from 'react';
import './App.css'
import HelloWorld from './components/SimplestComponet';

const App = () => {

  return (
    <div className='App'>
      <h1 className='h1'>Playground</h1>
      <br/>
      <HelloWorld name='Konstantyn' />
    </div>
  );
}

export default App;
