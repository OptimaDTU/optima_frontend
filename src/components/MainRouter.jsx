import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import ModulePageFetch from "./ModulePageFetch";
import VideoPageFetch from "./VideoPageFetch";
import Team from "./Team";

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/module/:slug/video/:vidslug" component={VideoPageFetch} />
      <Route path="/module/:slug" component={ModulePageFetch} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default MainRouter;
