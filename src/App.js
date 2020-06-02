import React from 'react';
import './App.css';
import UseState from './components/useState/UseState';
import PrevState from './components/useState/PrevState';
import WithObject from './components/useState/WithObject';
import WithArray from './components/useState/WithArray';
import AfterRender from './components/useEffect/AfterRender';
import ConditionallyRun from './components/useEffect/ConditionallyRun';
import EffectOnce from './components/useEffect/EffectOnce';

function App() {
  return (
    <div className="App">
      <UseState/>
      <PrevState/>
      <WithObject/>
      <WithArray/>
      <AfterRender/>
      <ConditionallyRun/>
      <EffectOnce/>
    </div>
  );
}

export default App;
