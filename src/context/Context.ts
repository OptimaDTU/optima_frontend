import React from "react";

const Auth = React.createContext({
  signedIn: false,
  username: ""
});

const GlobalContext = React.createContext({
  apiurl: process.env.API_URL,
  forumLink: process.env.FORUM_LINK
});

export { GlobalContext, Auth };
