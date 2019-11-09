import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationWrapper from './Components/NavigationWrapper'

function App() {
  return (
    <div className="App">
      <NavigationWrapper />
      <nav className="navbar fixed-bottom navbar-light bg-light">
        <p id="middle"> © EssenFertig 2019</p>
      </nav>
    </div >
  );
}

export default App;
