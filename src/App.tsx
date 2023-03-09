import React from 'react';
import './App.css'
import Counter from './components/Counter';
import HelloWorld from './components/SimplestComponet';

const App = () => {

  return (
    <div className='App'>
      <h1 className="h1 mb-3">Playground</h1>
      <HelloWorld name='Konstantyn' />
      <br/>
      <Counter initialCount={0} />
    </div>
  );
}

export default App;
