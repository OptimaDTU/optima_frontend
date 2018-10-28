import React from "react";

const Auth = React.createContext({
  signedIn: false,
  username: ""
});

const GlobalContext = React.createContext({
  forumLink: "https://optima-dtu.herokuapp.com/"
});

export { GlobalContext, Auth };
