import React, { Component } from "react";
import { HashRouter } from "react-router-dom";

import { GlobalContext } from "./context/Context";
import NavBar from "./components/NavBar";
import MainRouter from "./components/MainRouter";

import "./App.css";

class App extends Component {
  render() {
    return (
      <GlobalContext.Provider
        value={{
          apiurl: process.env.REACT_APP_API_URL,
          forumLink: process.env.REACT_APP_FORUM_LINK
        }}
      >
        <HashRouter basename="/">
          <div className="App mb-5">
            <NavBar />
            <MainRouter />
          </div>
        </HashRouter>
      </GlobalContext.Provider>
    );
  }
}

export default App;
