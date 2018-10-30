import React from "react";

const Auth = React.createContext({
  signedIn: false,
  username: ""
});

const GlobalContext = React.createContext({
  apiurl: "https://optimadtu.herokuapp.com",
  forumLink: "https://optima-dtu.herokuapp.com/"
});

export { GlobalContext, Auth };
