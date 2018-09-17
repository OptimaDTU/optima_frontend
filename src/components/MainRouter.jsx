import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import ModulePageFetch from './ModulePageFetch';

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/module/{slug}" component={ModulePageFetch} />
    </Switch>
  )
}

export default MainRouter;