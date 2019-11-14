import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          How about a taco salad?
        </p>
				<div>
					<h1>My First Practice App</h1>
				</div>
      </header>
    </div>
  );
}

export default App;
