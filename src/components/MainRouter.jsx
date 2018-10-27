import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import ModulePageFetch from "./ModulePage/ModulePageFetch";
import VideoPageFetch from "./VideoPage/VideoPageFetch";
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
