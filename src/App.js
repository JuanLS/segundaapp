import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenid@ a LatinSalsa.
        </p>
        <a
          className="App-link"
          href="https://www.latinsalsa.es"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitanos
        </a>
      </header>
    </div>
  );
}

export default App;
