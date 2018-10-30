import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import { GlobalContext } from "./context/Context";
import NavBar from "./components/NavBar";
import MainRouter from "./components/MainRouter";

import "./App.css";

class App extends Component {
  render() {
    return (
      <GlobalContext.Provider
        value={{
          apiurl: process.env.API_URL,
          forumLink: process.env.FORUM_LINK
        }}
      >
        <BrowserRouter>
          <div className="App mb-5">
            <NavBar />
            <MainRouter />
          </div>
        </BrowserRouter>
      </GlobalContext.Provider>
    );
  }
}

export default App;
