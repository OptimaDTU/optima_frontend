import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './components/NavBar';
import MainRouter from './components/MainRouter';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <MainRouter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
