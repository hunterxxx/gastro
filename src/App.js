import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import NavigationWrapper from './Components/NavigationWrapper'

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/"><h3>EssenFertig</h3></Navbar.Brand>
      </Navbar>
      <NavigationWrapper />
      <nav className="navbar fixed-bottom navbar-light bg-light">
        <p id="middle"> © EssenFertig 2019</p>
      </nav>
    </div >
  );
}

export default App;
