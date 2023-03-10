import React, { useState } from 'react';
import './App.css'
import Counter from './components/Counter';
import FormWithValidation from './components/FormWithValidaiton';
import PostList from './components/SimpleList';
import HelloWorld from './components/SimplestComponet';
import ConditionalWrapper from './components/ConditionalWrapper';
import CounterWithPrevProps from './components/CounterWithPrevProps';

const App = () => {

  const [show, setShow] = useState(false);

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
      <br/>
      <h4 className="h4">Conditional render</h4>
      <button className="btn btn-primary" onClick={() => {setShow(!show)}}>Click to show component</button>
      <ConditionalWrapper show={show}>
        <h1>Ta-da!</h1>
      </ConditionalWrapper>
      <br/>
      <CounterWithPrevProps />
    </div>
  );
}

export default App;
