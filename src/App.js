import React, { Component } from 'react';
import NavBar from './components/NavBar';
import MainRouter from './components/MainRouter'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MainRouter />
      </div>
    );
  }
}

export default App;
