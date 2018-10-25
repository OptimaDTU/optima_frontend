import React from "react";

import teamData from "./team_data";

const Auth = React.createContext({
  signedIn: false,
  username: ""
});

const GlobalContext = React.createContext({
  forumLink: "https://optima-dtu.herokuapp.com/",
  teamData: teamData
});

console.log(teamData);

export { GlobalContext, Auth };
