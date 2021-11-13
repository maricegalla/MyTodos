import * as React from 'react';
import Routes from './Routes';
import './App.css';
import Provider from './context/Provider';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
