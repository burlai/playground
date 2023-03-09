import React from 'react';
import './App.css'
import Counter from './components/Counter';
import FormWithValidation from './components/FormWithValidaiton';
import PostList from './components/SimpleList';
import HelloWorld from './components/SimplestComponet';

const App = () => {

  return (
    <div className='App'>
      <h1 className="h1 mb-3">Playground</h1>
      <HelloWorld name='Konstantyn' />
      <br/>
      <Counter initialCount={0} />
      <br/>
      <h4 className="h4">List of posts:</h4>
      <PostList />
      <br/>
      <h4 className="h4">Form with validation</h4>
      <FormWithValidation />
    </div>
  );
}

export default App;
