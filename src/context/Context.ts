import React from "react";

const Auth = React.createContext({
  signedIn: false,
  username: ""
});

const GlobalContext = React.createContext({
  apiurl: process.env.REACT_APP_API_URL,
  forumLink: process.env.REACT_APP_FORUM_LINK
});

export { GlobalContext, Auth };
