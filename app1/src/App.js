import React from 'react';
import './App.css';
import { Routing } from './components/common/Routing';
import { Menu } from './components/common/Menu';

function App() {
  return (
    <Routing>
      <Menu />
    </Routing>
  );
}

export default App;
