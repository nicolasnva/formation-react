import React from 'react';
import './App.css';
import { Routing } from './components/common/Routing';
import { Menu } from './components/common/Menu';
import { Typography } from '@material-ui/core';

function App() {
  return (
    <Routing>
      <Typography variant="h2">Gringotts Manager</Typography>
      <Menu />
    </Routing>
  );
}

export default App;
