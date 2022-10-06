import React from 'react';
import './App.scss';
import Index from './views/header/index';
import HardSkills from './views/hardskills';
import MyProject from './views/myprojects/index';

function App() {
  return (
    <div className="App">
      <Index />
      <HardSkills/>
      <MyProject/>
    </div>
  );
}

export default App;
